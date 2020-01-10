<script>
import Image from "svelte-image";
</script>

<style lang="postcss">
  h1, p {
    /* @apply; */
  }

  h1 {
    @apply text-2xl font-light m-0 mb-2 text-gray-700;
  }

  /* figure {
    @apply m-0 mb-4;
  } */

  /* img {
    @apply w-full my-8 mx-auto max-w-sm;
  } */

  p {
    @apply my-4;
  }
</style>

<svelte:head>
  <title>Sapper TailwindCSS Starter Project template</title>
</svelte:head>

<div class="flex flex-col md:flex-row items-center mt-12 py-8">
  <!--Left Col-->
  <div class="flex flex-col w-full lg:w-1/2 pt-2 pb-24 px-6">
    <h1>Sapper TailwindCSS Starter</h1>

    <p class="mb-4">Enter your super app's description here... The key is to find the right length.  Don't want it to be too long, but then don't want it to be too short so that it looks weird between the title and button below.</p>

  </div>

  <!--Right Col-->
  <div class="w-full lg:w-1/2 lg:py-6 text-center">
    <!--Add your product image here-->
    <Image alt="Autumn landscape in Yosemite National Park, USA" src="photos/aniket-deole-294646-unsplash.jpg" />
    <p class="text-xs text-gray-500">
    Photo by <a href="https://unsplash.com/@anik3t?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Aniket Deole">Aniket Deole</a> on Unsplash
    </p>
  </div>

</div>
