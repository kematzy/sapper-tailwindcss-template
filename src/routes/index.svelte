<script>
import Image from "svelte-image";
import { _ } from 'svelte-i18n';
</script>

<style lang="postcss">
  h1 {
    @apply text-2xl font-light m-0 mb-2 text-gray-700;
  }

  p {
    @apply my-4;
  }
</style>

<svelte:head>
  <title>{$_('pages.home.seo.title')} | {$_('seo.site_title')}</title>
  <meta name="description" content="{$_('pages.home.seo.description')}" />
</svelte:head>

<div class="flex flex-col md:flex-row pt-6">
  <!--Left Col-->
  <div class="flex flex-col w-full lg:w-1/2 pr-24 pb-24 pr-6">
    <h1>{$_('pages.home.h1')}</h1>

    <p class="mb-4">{$_('pages.home.intro')}</p>

  </div>

  <!--Right Col-->
  <div class="w-full lg:w-1/2">
    <!--Add your product image here-->
    <Image alt="Autumn landscape in Yosemite National Park, USA" src="photos/aniket-deole-294646-unsplash.jpg" />
    <span class="text-xs text-gray-700 m-0 pl-2">
    Photo by <a href="https://unsplash.com/@anik3t?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Aniket Deole">Aniket Deole</a> on Unsplash
    </span>


    <picture>
      <source type="image/webp" srcset="g/photos/aniket-deole-294646-unsplash-400.webp 375w,g/photos/aniket-deole-294646-unsplash-800.webp 768w,g/photos/aniket-deole-294646-unsplash-1200.webp 1024w,g/photos/aniket-deole-294646-unsplash-1500.webp 1280w">
      <source srcset="g/photos/aniket-deole-294646-unsplash-400.jpg 375w,g/photos/aniket-deole-294646-unsplash-800.jpg 768w,g/photos/aniket-deole-294646-unsplash-1200.jpg 1024w,g/photos/aniket-deole-294646-unsplash-1500.jpg 1280w">
      <img class="" alt="Autumn landscape in Yosemite National Park, USA" srcset="g/photos/aniket-deole-294646-unsplash-400.jpg 375w,g/photos/aniket-deole-294646-unsplash-800.jpg 768w,g/photos/aniket-deole-294646-unsplash-1200.jpg 1024w,g/photos/aniket-deole-294646-unsplash-1500.jpg 1280w" width="" height="" sizes="(max-width: 1000px) 100vw, 1000px">
    </picture>

  </div>

</div>
