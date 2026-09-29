<script setup>
import { useLocale } from '../composables/useLocale';
import BuniaMark from './BuniaMark.vue';
import NotifyForm from './NotifyForm.vue';

const { t, site, features } = useLocale();
</script>

<template>
  <section class="relative z-10 px-6 md:px-12 max-w-7xl mx-auto pt-16 md:pt-32 pb-32">
    <div class="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
      
      <div class="lg:col-span-7 text-center lg:text-start">
        <span class="inline-block text-xs font-medium px-4 py-2 mb-8 border border-bone/20 text-bone/80 rounded-md">
          {{ t.hero.badge }}
        </span>
        
        <h1 class="font-display font-bold text-bone mb-8" style="font-size: clamp(2.75rem, 9vw, 6.5rem); line-height: 1.1; text-wrap: balance;">
          {{ t.hero.h1 }}
        </h1>
        
        <p class="text-lg md:text-xl text-bone/80 max-w-xl mx-auto lg:mx-0 mb-12" style="line-height: 1.75; text-wrap: pretty;">
          {{ t.hero.subtitle }}
        </p>

        <div v-if="features.showNotifyForm" class="max-w-md mx-auto lg:mx-0 text-center lg:text-start">
          <h2 class="text-bone font-semibold text-lg mb-2">{{ t.hero.formHeading }}</h2>
          <p class="text-sm text-bone/60 mb-6">{{ t.hero.formHint }}</p>
          <NotifyForm />
        </div>
      </div>

      <div class="lg:col-span-5 flex justify-center items-center relative">
        <div class="relative w-full max-w-sm aspect-[4/5]">
          <BuniaMark class="absolute inset-0 w-full h-full text-indigoLight opacity-30" :animate="false" />
          <BuniaMark class="relative w-full h-full text-bone" />
        </div>
      </div>

    </div>
  </section>
</template>