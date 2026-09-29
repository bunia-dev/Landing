<script setup>
import { useLocale } from './composables/useLocale';
import SiteHeader from './components/SiteHeader.vue';
import HeroSection from './components/HeroSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import PrinciplesSection from './components/PrinciplesSection.vue';
import SiteFooter from './components/SiteFooter.vue';

const { t, site, features } = useLocale();
</script>

<template>
  <div class="min-h-screen flex flex-col bg-ink relative overflow-x-hidden">
    <a href="#main" class="skip-link">{{ t.a11y.skipToContent }}</a>
    
    <!-- Blueprint Background -->
    <div v-if="features.showBlueprintBackground" class="fixed inset-0 blueprint-grid pointer-events-none z-0" aria-hidden="true"></div>
    
    <SiteHeader />
    
    <main id="main" class="flex-1 relative z-10">
      <HeroSection />
      <ServicesSection />
      <PrinciplesSection />
    </main>
    
    <SiteFooter />
  </div>
</template>