import { ref, computed } from 'vue';
import ar from '../locales/ar.json';
import siteConfig from '../config/site.json';
import featuresConfig from '../config/features.json';

const locales = { ar };
const currentLocale = ref('ar');

export function useLocale() {
  function setLocale(locale) {
    currentLocale.value = locale;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }

  const t = computed(() => locales[currentLocale.value]);
  const site = computed(() => siteConfig);
  const features = computed(() => featuresConfig);

  return {
    currentLocale,
    setLocale,
    t,
    site,
    features
  };
}