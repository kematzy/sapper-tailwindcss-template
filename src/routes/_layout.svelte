<script context="module">
  import { isLoading, waitLocale } from 'svelte-i18n'

  export async function preload() {
    // awaits for the loading of the 'en-US' and 'en' dictionaries
    return waitLocale()
  }
</script>

<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

{#if $isLoading}
  <div class="loading">Loading...</div>
{/if}

<Nav {segment} />

<main class="container">
  <slot />
</main>

<style lang="postcss">
  :global(body) {
    font-family: 'Montserrat', sans-serif;
  }

  main {
    @apply mx-auto mt-12 bg-gray-100 px-3 pb-24;

    @media (min-width: 768px) {
      @apply px-0;
    }
  }

  .loading {
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-family: monospace;
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
