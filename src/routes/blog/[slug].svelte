<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style lang="postcss">
  h1 {
    @apply text-2xl text-blue-800 mb-6;
  }

  /*
    By default, CSS is locally scoped to the component,
    and any unused styles are dead-code-eliminated.
    In this page, Svelte can't know which elements are
    going to appear inside the {{{post.html}}} block,
    so we have to use the :global(...) modifier to target
    all elements inside .content
  */
  .content :global(h2) {
    @apply text-2xl font-medium my-4 text-blue-800;
  }

  .content :global(p) {
    @apply text-base mb-4;
  }

  .content :global(strong) {
    @apply font-semibold;
  }

  .content :global(pre) {
    @apply bg-gray-400 shadow-inner p-2 rounded overflow-x-auto;
  }

  .content :global(pre) :global(code) {
    @apply bg-transparent p-0 font-mono;
  }
  .content :global(code) {
    @apply px-1 font-mono bg-gray-300 text-sm;
  }

  .content :global(ul) {
    @apply leading-normal list-disc my-6;
  }

  .content :global(li) {
    @apply m-0 mb-2 ml-6;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>


<div class="flex flex-col md:flex-row">

  <div class="w-full mt-4">
    <h1>{post.title}</h1>

    <div class='content'>
      {@html post.html}
    </div>

    <p class="text-right"><a class="text-gray-600 underline" href='blog'>back to Recent Posts</a></p>
  </div>
</div>
