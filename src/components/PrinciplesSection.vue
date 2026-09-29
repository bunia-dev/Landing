<script setup>
import { useLocale } from '../composables/useLocale';
const { t } = useLocale();
</script>

<template>
  <section class="relative z-10 py-32 px-6 md:px-12 max-w-7xl mx-auto">
    <div class="grid lg:grid-cols-12 gap-16">
      <div class="lg:col-span-5">
        <h2 class="font-display font-bold text-bone" style="font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.2; text-wrap: balance;">
          {{ t.principles.title }}
        </h2>
      </div>
      <div class="lg:col-span-7 flex flex-col gap-12">
        <div v-for="(item, index) in t.principles.items" :key="index" class="ps-8 border-s-2 border-bone/20">
          <h3 class="text-xl font-semibold text-bone mb-3" style="font-family: 'Readex Pro', sans-serif;">{{ item.title }}</h3>
          <p class="text-lg text-bone/70" style="line-height: 1.75;">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>