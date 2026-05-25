<script setup>
const config = useRuntimeConfig();
const startYear = 2023;
const copyrightEndYear = Number(config.public.copyrightYear) || new Date().getFullYear();
const copyrightYears = copyrightEndYear > startYear
  ? `${startYear}-${copyrightEndYear}`
  : `${startYear}`;
</script>

<template>
  <footer class="bg-nord-snow-2 dark:bg-nord-night-0 rounded-lg shadow m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <NuxtLink to="#about" class="flex items-center mb-4 sm:mb-0">
          <Logo class="h-16" />
        </NuxtLink>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <NuxtLink to="#work-experience" class="mr-4 hover:underline md:mr-6 ">Experience</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#publications-awards" class="mr-4 hover:underline md:mr-6 ">Publications</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#projects" class="mr-4 hover:underline md:mr-6">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#writing" class="hover:underline">Writing</NuxtLink>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div class="flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-4 dark:text-gray-400">
        <span>
          © {{ copyrightYears }} <NuxtLink to="https://github.com/5ei74R0" target="_blank" class="transition-colors hover:text-nord-aurora-0 hover:underline dark:hover:text-nord-aurora-3">5ei74R0</NuxtLink>. All
          Rights Reserved.
        </span>
        <time :datetime="config.public.lastUpdatedIso">
          Last updated: {{ config.public.lastUpdatedDisplay }} JST
        </time>
      </div>
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Many thx for <NuxtLink to="https://nuxt.com/" target="_blank" class="transition-colors hover:text-nord-aurora-0 hover:underline dark:hover:text-nord-aurora-3">Nuxt.js</NuxtLink>,
        <NuxtLink to="https://tailwindcss.com/" target="_blank" class="transition-colors hover:text-nord-aurora-0 hover:underline dark:hover:text-nord-aurora-3">Tailwind CSS</NuxtLink>, and
        <NuxtLink to="https://flowbite.com/" target="_blank" class="transition-colors hover:text-nord-aurora-0 hover:underline dark:hover:text-nord-aurora-3">Flowbite</NuxtLink>.
      </span>
    </div>
  </footer>
</template>
