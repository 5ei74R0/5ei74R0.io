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
                class="block px-4 py-2 text-sm text-nord-night-0 hover:bg-nord-snow-1 dark:hover:bg-nord-night-1 dark:text-nord-snow-1 dark:hover:text-nord-snow-2">
                Jump to GitHub</NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://zenn.dev/5ei74r0"
                class="block px-4 py-2 text-sm text-nord-night-0 hover:bg-nord-snow-1 dark:hover:bg-nord-night-1 dark:text-nord-snow-1 dark:hover:text-nord-snow-2">
                Jump to Zenn (JP)</NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://smilab.org/en/"
                class="block px-4 py-2 text-sm text-nord-night-0 hover:bg-nord-snow-1 dark:hover:bg-nord-night-1 dark:text-nord-snow-1 dark:hover:text-nord-snow-2">
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
</nav></template>