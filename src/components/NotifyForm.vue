<script setup>
import { ref, computed } from 'vue';
import { useLocale } from '../composables/useLocale';

const { t, site } = useLocale();

const email = ref('');
const honeypot = ref('');
const isSending = ref(false);
const formSubmitted = ref(false);
const formError = ref('');

const showForm = computed(() => {
  if (site.value.notifyForm.provider === 'none' || site.value.notifyForm.endpoint === '') {
    return false;
  }
  return true;
});

const validateEmail = (val) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(val);
};

const submitForm = async () => {
  formError.value = '';
  
  if (honeypot.value) return; // Bot trapped
  
  if (!validateEmail(email.value)) {
    formError.value = t.value.notify.errorInvalid;
    return;
  }

  isSending.value = true;

  try {
    const endpoint = site.value.notifyForm.endpoint;
    const fieldName = site.value.notifyForm.emailFieldName || 'email';
    
    const formData = new FormData();
    formData.append(fieldName, email.value);
    formData.append('_subject', t.value.notify.mailtoSubject);

    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      formSubmitted.value = true;
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    formError.value = t.value.notify.errorGeneric;
  } finally {
    isSending.value = false;
  }
};
</script>

<template>
  <div class="w-full">
    <div v-if="!showForm">
      <a :href="`mailto:${site.contact.email}?subject=${encodeURIComponent(t.notify.mailtoSubject)}`" class="btn-primary inline-block no-underline">
        {{ t.notify.mailtoButton }}
      </a>
    </div>
    
    <div v-else-if="formSubmitted" role="status" aria-live="polite" class="text-emerald font-semibold py-4">
      {{ t.notify.success }}
    </div>
    
    <form v-else @submit.prevent="submitForm" class="flex flex-col sm:flex-row gap-2 w-full">
      <label for="email" class="sr-only">{{ t.notify.emailLabel }}</label>
      <input 
        id="email" 
        type="email" 
        v-model="email" 
        :placeholder="t.notify.placeholder" 
        class="input-field flex-1" 
        autocomplete="email" 
        inputmode="email"
        required
        dir="ltr"
        style="text-align: start;"
      />
      
      <!-- Honeypot field -->
      <input type="text" v-model="honeypot" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true" />
      
      <button type="submit" class="btn-primary whitespace-nowrap" :disabled="isSending">
        {{ isSending ? t.notify.sending : t.notify.button }}
      </button>
    </form>
    
    <div v-if="formError" role="alert" class="text-red-400 text-sm mt-2 text-start">
      {{ formError }}
    </div>
  </div>
</template>