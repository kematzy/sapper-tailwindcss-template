<script>
  export let segment;
</script>

<style lang="postcss">
  nav {
    @apply border border-gray-200 border-solid font-light px-4;
  }

  ul {
    @apply m-0 p-0;

    /* clearfix */
    &::after {
      content: '';
      display: block;
      clear: both;
    }

    li {
      @apply block float-left;
    }
  }

  .selected {
    @apply inline-block relative;

    &::after {
      @apply absolute bg-red-500 block h-1;
      content: '';
      width: calc(100% - 1em);
      bottom: -1px;
    }
  }

  a {
    @apply py-4 px-2 block no-underline;
  }
</style>

<nav>
  <ul>
    <li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
    <li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
         the blog data when we hover over the link or tap it on a touchscreen -->
    <li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>
  </ul>
</nav>
