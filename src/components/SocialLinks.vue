<script setup>
import { useLocale } from '../composables/useLocale';
import { computed } from 'vue';

const { t, site } = useLocale();

const socials = computed(() => {
  const links = [];
  if (site.value.socials.linkedin && !site.value.socials.linkedin.includes('REPLACE_ME')) {
    links.push({ name: 'لينكدإن', url: site.value.socials.linkedin, icon: 'linkedin' });
  }
  if (site.value.socials.github && !site.value.socials.github.includes('REPLACE_ME')) {
    links.push({ name: 'جيت هاب', url: site.value.socials.github, icon: 'github' });
  }
  if (site.value.socials.instagram && !site.value.socials.instagram.includes('REPLACE_ME')) {
    links.push({ name: 'إنستغرام', url: site.value.socials.instagram, icon: 'instagram' });
  }
  if (site.value.socials.facebook && !site.value.socials.facebook.includes('REPLACE_ME')) {
    links.push({ name: 'فيسبوك', url: site.value.socials.facebook, icon: 'facebook' });
  }
  return links;
});
</script>

<template>
  <div v-if="socials.length" class="flex flex-col gap-4">
    <h3 class="text-lg font-bold text-bone mb-2" style="font-family: 'Cairo', sans-serif;">{{ t.social.heading }}</h3>
    <ul class="flex gap-4">
      <li v-for="social in socials" :key="social.name">
        <a 
          :href="social.url" 
          target="_blank" 
          rel="noopener noreferrer me"
          :aria-label="social.name"
          class="block p-3 border border-slate/20 text-bone hover:text-amber hover:border-amber/50 transition-colors duration-300"
          style="border-radius: 0.5rem 0 0.5rem 0;"
        >
          <svg v-if="social.icon === 'linkedin'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
          <svg v-if="social.icon === 'github'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
          </svg>
          <svg v-if="social.icon === 'instagram'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <svg v-if="social.icon === 'facebook'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>