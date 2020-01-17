<script>
  import { _, locale, locales } from 'svelte-i18n'
  export let segment
  let hidden = true
  function toggleHidden() {
    hidden = !hidden
  }
</script>

<nav>
  <div class="brand">
    <a href=".">
      <span class="text-xl">Sapper TailwindCSS</span>
    </a>
  </div>

  <div class="block md:hidden">
    <button id="nav-toggle" on:click="{toggleHidden}">
      <svg
        class="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </button>
  </div>

  <div id="nav-content" class:hidden>
    <ul>
      <li class="{segment === undefined ? 'active' : ''}">
        <a href="." on:click="{toggleHidden}" title="{$_('nav.home.title')}">
          {$_('nav.home.text')}
        </a>
      </li>
      <li class="{segment === 'about' ? ' active' : ''}">
        <a
          href="about"
          on:click="{toggleHidden}"
          title="{$_('nav.about.title')}"
        >
          {$_('nav.about.text')}
        </a>
      </li>
      <li class="{segment === 'blog' ? ' active' : ''}">
        <a
          rel="prefetch"
          href="blog"
          on:click="{toggleHidden}"
          title="{$_('nav.blog.title')}"
        >
          {$_('nav.blog.text')}
        </a>
      </li>
      <li class="hoverable">
        <a id="i18n-flag" href="javascript:;" class="lowercase">{$_('flag')}</a>
        <div id="i18n-menu">
          <ul style="display: block;">
            <!-- NOTE: must keep style here to override global ul formatting -->
            {#each $locales as item}
              <li>
                <a
                  class:selected="{$locale.includes(item)}"
                  href="javascript:;"
                  on:click="{() => ($locale = item)}"
                >
                  {item.replace('-', '_')}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      </li>
    </ul>
  </div>
</nav>

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

      @media (min-width: 768px) {
        @apply items-center w-auto block py-0 pl-3;
      }
    }
  }

  ul {
    @apply justify-end flex-1 items-center px-0;

    @media (min-width: 768px) {
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

    &.selected:hover,
    &.selected {
      @apply text-blue-600;
    }
  }

  #i18n-menu {
    @apply bg-gray-800 absolute hidden shadow-xl z-10;

    ul {
      @apply flex p-2;

      li:hover a {
        @apply text-blue-300;
      }
    }

    @media (min-width: 768px) {
      ul {
        @apply block p-2;
      }
    }
  }

  #i18n-flag {
    position: static;
    font-size: 1.25rem;
  }
  .hoverable {
    position: static;
  }
  .hoverable > a:after {
    @apply text-gray-600 text-sm relative;
    content: '\25BC';
    padding-left: 6px;
    top: -1px;
  }
  .hoverable:hover #i18n-menu {
    display: block;
  }
</style>
