<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`api/blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts }
      })
  }
</script>

<script>
  import { _ } from 'svelte-i18n'
  export let posts
</script>

<svelte:head>
  <title>{$_('pages.blog.seo.title')} | {$_('seo.site_title')}</title>
  <meta name="description" content="{$_('pages.blog.seo.description')}" />
</svelte:head>

<div class="flex flex-col md:flex-row">
  <!--Left Col-->
  <div class="flex flex-col w-full lg:w-1/2 pt-6 pr-24 pb-24 px-6">
    <h1>{$_('pages.blog.h1')}</h1>

    <ul>
      {#each posts as post}
        <!-- we're using the non-standard `rel=prefetch` attribute to
      tell Sapper to load the data for the page as soon as
      the user hovers over the link or taps it, instead of
      waiting for the 'click' event -->
        <li>
          <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="postcss">
  h1 {
    @apply text-2xl text-blue-800 mb-6;
  }

  ul {
    @apply m-0 mb-4 leading-normal list-disc;

    li {
      @apply ml-6 mb-2;
    }
  }
</style>
