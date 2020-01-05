<style lang="postcss">
  h1, figure, p {
    @apply text-center m-0 mx-auto;
  }

  h1 {
    @apply text-2xl font-light m-0 mb-2 text-red-600;
  }

  figure {
    @apply m-0 mb-4;
  }

  img {
    @apply w-full my-8 mx-auto max-w-sm;
  }

  p {
    @apply my-4 mx-auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4rem;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
  <img alt='Borat' src='great-success.png'>
  <figcaption>HIGH FIVE!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
