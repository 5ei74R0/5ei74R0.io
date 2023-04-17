<script setup>
import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';

onMounted(() => {
  initFlowbite();
})

</script>

<template>
  <nav
    class="bg-nord-snow-2 dark:bg-nord-night-0 fixed w-full z-20 top-0 left-0 border-b border-nord-snow-1 dark:border-nord-night-1">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="#about" class="flex items-center">
        <Logo class="h-8" />
      </NuxtLink>
      <div class="flex items-center md:order-2">
        <DarkModeButton />
        <div class="w-4"></div>
        <IconButton />
        <!-- Dropdown menu -->
        <div
          class="z-50 hidden my-4 text-base list-none bg-nord-snow-2 divide-y divide-nord-snow-2 rounded-lg shadow dark:bg-nord-night-0 dark:divide-nord-night-1"
          id="user-dropdown">
          <div class="px-4 py-3">
            <span class="block text-base text-nord-night-0 dark:text-nord-snow-2">Seitaro OTSUKI</span>
            <span style="font-family: JetBrains Mono;"
              class="block overflow-x-clip text-xs font-extralight text-nord-night-2 truncate dark:text-nord-snow-0">s =
              [cx for cx in "es8usto"]
            </span>
            <span style="font-family: JetBrains Mono;"
              class="block overflow-x-clip text-xs font-extralight text-nord-night-2 truncate dark:text-nord-snow-0">t =
              "i14" + chr(64)
            </span>
            <span style="font-family: JetBrains Mono;"
              class="block overflow-x-clip text-xs font-extralight text-nord-night-2 truncate dark:text-nord-snow-0">u =
              [ch for ch in "pj.oiek"]
            </span>
            <span style="font-family: JetBrains Mono;"
              class="block overflow-x-clip text-xs font-extralight text-nord-night-2 truncate dark:text-nord-snow-0">f =
              lambda x: "".join(x[::-1])
            </span>
            <span style="font-family: JetBrains Mono;"
              class="block overflow-x-clip text-xs font-extralight text-nord-night-2 truncate dark:text-nord-snow-0">contact
              = f(s) + t + f(u)
            </span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <NuxtLink to="https://github.com/5ei74R0"
                class="block w-full inline-flex px-4 py-2 text-sm text-nord-night-0 hover:bg-nord-snow-1 dark:hover:bg-nord-night-1 dark:text-nord-snow-1 dark:hover:text-nord-snow-2">
                Jump to GitHub
                <svg class="h-5 ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://zenn.dev/5ei74r0"
                class="block w-full inline-flex px-4 py-2 text-sm text-nord-night-0 hover:bg-nord-snow-1 dark:hover:bg-nord-night-1 dark:text-nord-snow-1 dark:hover:text-nord-snow-2">
                Jump to Zenn (JP)</NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://smilab.org/en/"
                class="block w-full inline-flex px-4 py-2 text-sm text-nord-night-0 hover:bg-nord-snow-1 dark:hover:bg-nord-night-1 dark:text-nord-snow-1 dark:hover:text-nord-snow-2">
                Jump to Lab.</NuxtLink>
            </li>
          </ul>
        </div>
        <button data-collapse-toggle="mobile-menu-2" type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-nord-night-1 rounded-lg md:hidden hover:bg-nord-snow-1 focus:outline-none focus:ring-2 focus:ring-nord-snow-1 dark:text-nord-snow-1 dark:hover:bg-nord-night-1 dark:focus:ring-nord-night-1"
          aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-nord-snow-2 rounded-lg bg-nord-snow-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-nord-snow-2 dark:bg-nord-night-3 md:dark:bg-nord-night-0 dark:border-nord-night-0">
          <li>
            <NuxtLink to="#projects"
              class="block py-2 pl-3 pr-4 text-nord-night-0 rounded hover:bg-nord-snow-1 md:hover:bg-transparent md:focus:text-nord-aurora-0 md:hover:text-nord-aurora-0 md:p-0 dark:text-nord-snow-2 md:dark:focus:text-nord-aurora-0 md:dark:hover:text-nord-aurora-0 dark:hover:bg-nord-night-1 dark:hover:text-nord-snow-2 md:dark:hover:bg-transparent dark:border-nord-night-0">
              Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#blog-posts"
              class="block py-2 pl-3 pr-4 text-nord-night-0 rounded hover:bg-nord-snow-1 md:hover:bg-transparent md:focus:text-nord-aurora-0 md:hover:text-nord-aurora-0 md:p-0 dark:text-nord-snow-2 md:dark:focus:text-nord-aurora-0 md:dark:hover:text-nord-aurora-0 dark:hover:bg-nord-night-1 dark:hover:text-nord-snow-2 md:dark:hover:bg-transparent dark:border-nord-night-0">
              Blog Posts</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#work-experience"
              class="block py-2 pl-3 pr-4 text-nord-night-0 rounded hover:bg-nord-snow-1 md:hover:bg-transparent md:focus:text-nord-aurora-0 md:hover:text-nord-aurora-0 md:p-0 dark:text-nord-snow-2 md:dark:focus:text-nord-aurora-0 md:dark:hover:text-nord-aurora-0 dark:hover:bg-nord-night-1 dark:hover:text-nord-snow-2 md:dark:hover:bg-transparent dark:border-nord-night-0">
              Work
              Experience</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#publications-awards"
              class="block py-2 pl-3 pr-4 text-nord-night-0 rounded hover:bg-nord-snow-1 md:hover:bg-transparent md:focus:text-nord-aurora-0 md:hover:text-nord-aurora-0 md:p-0 dark:text-nord-snow-2 md:dark:focus:text-nord-aurora-0 md:dark:hover:text-nord-aurora-0 dark:hover:bg-nord-night-1 dark:hover:text-nord-snow-2 md:dark:hover:bg-transparent dark:border-nord-night-0">
              Publications</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#miscellaneous"
              class="block py-2 pl-3 pr-4 text-nord-night-0 rounded hover:bg-nord-snow-1 md:hover:bg-transparent md:focus:text-nord-aurora-0 md:hover:text-nord-aurora-0 md:p-0 dark:text-nord-snow-2 md:dark:focus:text-nord-aurora-0 md:dark:hover:text-nord-aurora-0 dark:hover:bg-nord-night-1 dark:hover:text-nord-snow-2 md:dark:hover:bg-transparent dark:border-nord-night-0">
              Misc.</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>