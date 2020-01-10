import { register, init } from 'svelte-i18n';

register('en', () => import('./lang/en.json'));
register('pt', () => import('./lang/pt.json'));

init({
  fallbackLocale: 'en',
  initialLocale: {
    navigator: true, // ie: 'en-US'
  }
});
