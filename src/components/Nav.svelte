<script>
  export let segment;
  let hidden = true;
  function toggleHidden() {
    hidden = !hidden;
  }
</script>

<style lang="postcss">
  nav {
    @apply flex items-center justify-between flex-wrap bg-gray-700 px-2 fixed w-full z-10 top-0;

    .brand {
      @apply text-gray-300 mr-6 font-light;

      a {
        @apply text-gray-300 no-underline;

        &:hover {
          @apply text-blue-200 no-underline;
        }
      }
    }

    #nav-toggle {
      @apply flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600;

      &:hover {
        @apply text-white border-white;
      }
    }

    #nav-content {
      @apply w-full flex-grow pt-6;

      @media (min-width: 1024px) {
        @apply flex items-center w-auto hidden block pt-0;
      }
    }
  }

  ul {
    @apply justify-end flex-1 items-center;

    @media (min-width: 1024px) {
      @apply flex;
    }

    li {
      @apply block;

      &:hover {
        @apply bg-gray-800;
      }
    }
  }

  a {
    @apply inline-block text-gray-600 no-underline py-2 px-4;

    &:hover {
      @apply text-blue-200;
    }
  }

  .active {
    @apply text-white inline-block relative;

    @media (min-width: 1024px) {
      &::after {
        @apply absolute bg-gray-600 block h-1;
        content: '';
        width: calc(100% - 1em);
        bottom: -1px;
      }
    }
  }
</style>

<nav>
  <div class="brand">
    <a href=".">
      <span class="text-xl pl-2">Sapper TailwindCSS</span>
    </a>
  </div>

  <div class="block lg:hidden">
    <button id="nav-toggle" on:click={toggleHidden}>
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>

  <div id="nav-content" class:hidden>
    <ul>
      <li class="mr-3">
        <a class="{segment === undefined ? "active" : ""}" href=".">Home</a>
      </li>
      <li class="mr-3">
        <a class="{segment === "about" ? " active" : ""}" href="about">About</a>
      </li>
      <li class="mr-3">
        <a rel=prefetch class="{segment === "blog" ? " active" : ""}" href="blog">Blog</a>
      </li>
    </ul>
  </div>
</nav>
