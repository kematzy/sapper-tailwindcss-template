<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<style lang="postcss">
  main {
    @apply mx-auto;
  }
</style>

<Nav {segment}/>

<main class="container">
  <slot></slot>
</main>
