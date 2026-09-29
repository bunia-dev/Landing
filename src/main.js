import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

// Self-hosted fonts: Manrope (Latin), Readex Pro (Arabic)
import '@fontsource-variable/manrope';
import '@fontsource/readex-pro/400.css';
import '@fontsource/readex-pro/500.css';
import '@fontsource/readex-pro/600.css';
import '@fontsource/readex-pro/700.css';

createApp(App).mount('#app');