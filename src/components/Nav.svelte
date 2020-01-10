<script>
  export let segment;
  let hidden = true;
  function toggleHidden() {
    hidden = !hidden;
  }
</script>

<style lang="postcss">
  nav {
    @apply flex items-center justify-between flex-wrap bg-gray-700 fixed w-full z-10 top-0;

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
      @apply flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 mr-3;

      &:hover {
        @apply text-white border-white;
      }
    }

    #nav-content {
      @apply w-full flex-grow py-6;

      @media (min-width: 1024px) {
        @apply flex items-center w-auto hidden block py-0 pl-3;
      }
    }
  }

  ul {
    @apply justify-end flex-1 items-center px-0;

    @media (min-width: 1024px) {
      @apply flex px-3;
    }

    li {
      @apply block uppercase text-sm;

      &:hover {
        @apply bg-gray-800;
      }

      &.active {
        @apply bg-gray-800;

        a {
          @apply text-white;
        }
      }
    }
  }

  a {
    @apply inline-block text-gray-400 no-underline py-2 px-4;

    &:hover {
      @apply text-blue-200;
    }
  }

</style>

<nav>
  <div class="brand">
    <a href=".">
      <span class="text-xl">Sapper TailwindCSS</span>
    </a>
  </div>

  <div class="block lg:hidden">
    <button id="nav-toggle" on:click={toggleHidden}>
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>

  <div id="nav-content" class:hidden>
    <ul>
      <li class="{segment === undefined ? "active" : ""}">
        <a class="" href="." on:click={toggleHidden}>Home</a>
      </li>
      <li class="{segment === "about" ? " active" : ""}">
        <a class="" href="about" on:click={toggleHidden}>About</a>
      </li>
      <li class="{segment === "blog" ? " active" : ""}">
        <a rel=prefetch class="" href="blog" on:click={toggleHidden}>Blog</a>
      </li>
    </ul>
  </div>
</nav>
