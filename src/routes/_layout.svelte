<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<style lang="postcss">
  main {
    @apply mx-auto mt-12 bg-gray-100 px-3 pb-24;

    @media (min-width: 768px) {
      @apply px-0;
    }
  }

</style>

<Nav {segment}/>

<main class="container">
  <slot></slot>
</main>
