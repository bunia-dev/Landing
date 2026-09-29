<script setup>
import { useLocale } from '../composables/useLocale';
const { t, features } = useLocale();
</script>

<template>
  <section v-if="features.showServices" class="relative z-10 py-32 px-6 md:px-12 max-w-7xl mx-auto">
    <div class="text-start mb-20 max-w-3xl">
      <h2 class="font-display font-bold text-bone mb-6" style="font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.2; text-wrap: balance;">
        {{ t.services.title }}
      </h2>
      <p class="text-lg text-bone/70" style="line-height: 1.75; text-wrap: pretty;">
        {{ t.services.intro }}
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <article v-for="(item, index) in t.services.items" :key="index" class="door-card">
        <!-- Custom Geometric SVG Icon -->
        <div class="mb-8 text-bone/80">
          <svg v-if="index === 0" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
          <svg v-if="index === 1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M2 10h20" />
            <path d="M6 14h4" />
          </svg>
          <svg v-if="index === 2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-bone mb-4" style="font-family: 'Readex Pro', sans-serif;">{{ item.title }}</h3>
        <p class="text-bone/70" style="line-height: 1.75;">{{ item.text }}</p>
      </article>
    </div>
  </section>
</template>