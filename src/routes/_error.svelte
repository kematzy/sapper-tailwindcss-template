<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<style lang="postcss">
  h1, p {
    @apply m-0 mx-auto;
  }

  h1 {
    @apply text-2xl font-medium m-0 mb-2;
  }

  p {
    @apply my-4 mx-auto;
  }

  @media (min-width: 480px) {
    h1 {
      @apply text-3xl;
    }
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
