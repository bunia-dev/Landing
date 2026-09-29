<script setup>
import { useLocale } from '../composables/useLocale';
import BuniaMark from './BuniaMark.vue';

const { t } = useLocale();
</script>

<template>
  <header class="relative z-20 py-10 px-6 md:px-12 max-w-7xl mx-auto w-full flex justify-between items-center">
    <div class="flex items-center gap-4">
      <BuniaMark class="w-14 h-14 text-bone" :animate="false" />
      <div class="flex flex-col">
        <span class="text-bone font-bold text-3xl leading-none" style="font-family: 'Manrope Variable', sans-serif;">bunia</span>
        <span class="text-bone/60 text-xs mt-2 tracking-widest uppercase" style="font-family: 'Manrope Variable', sans-serif;">bunia.dev</span>
      </div>
    </div>
    <span class="hidden sm:inline-block text-xs font-medium px-4 py-2 border border-bone/20 text-bone/80 rounded-md">
      {{ t.header.status }}
    </span>
  </header>
</template>