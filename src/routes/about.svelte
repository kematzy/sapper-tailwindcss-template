<script>
  // import Image from "svelte-image";
  import { _ } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$_('pages.about.seo.title')} | {$_('seo.site_title')}</title>
  <meta name="description" content="{$_('pages.about.seo.description')}" />
</svelte:head>

<div class="flex flex-col md:flex-row">
  <!--Left Col-->
  <div class="flex flex-col w-full lg:w-1/2 pt-6 pr-24 pb-24 px-6">
    <h1>{$_('pages.about.h1')}</h1>
    <p>{$_('pages.about.intro')}</p>
  </div>
</div>

<style lang="postcss">
  h1 {
    @apply text-2xl text-blue-800 mb-6;
  }
</style>
