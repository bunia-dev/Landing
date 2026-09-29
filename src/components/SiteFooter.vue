<script setup>
import { useLocale } from '../composables/useLocale';
import SocialLinks from './SocialLinks.vue';

const { t, site } = useLocale();
</script>

<template>
  <footer class="relative z-10 border-t border-bone/10 mt-32">
    <div class="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-3 gap-12">
      <div class="md:col-span-2">
        <SocialLinks />
      </div>
      <div class="md:text-end flex flex-col md:items-end">
        <div class="flex flex-col md:items-end mb-4">
          <span class="text-bone font-bold text-xl leading-none" style="font-family: 'Manrope Variable', sans-serif;">bunia</span>
          <span class="text-bone/70 text-xs mt-1" style="font-family: 'Manrope Variable', sans-serif;">bunia.dev</span>
        </div>
        <p class="text-bone/70 mb-2">{{ t.footer.tagline }}</p>
        <p class="text-bone/50 text-sm">
          <span class="inline-block" dir="ltr">{{ t.footer.location }}</span>
        </p>
      </div>
    </div>
    <div class="border-t border-bone/10">
      <div class="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs text-bone/40">{{ t.footer.rights }}</p>
        <p class="text-xs text-bone/40">{{ t.footer.note }}</p>
      </div>
    </div>
  </footer>
</template>