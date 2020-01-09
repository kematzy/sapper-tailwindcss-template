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
    <svg class="fill-current text-gray-900 w-3/5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>
  </div>

</div>
