<template>
  <footer class="bg-nord-snow-2 dark:bg-nord-night-0 rounded-lg shadow m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <NuxtLink to="#about" class="flex items-center mb-4 sm:mb-0">
          <Logo class="h-16" />
        </NuxtLink>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <NuxtLink to="#projects" class="mr-4 hover:underline md:mr-6">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#blog-posts" class="mr-4 hover:underline md:mr-6">Blog Posts</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#work-experience" class="mr-4 hover:underline md:mr-6 ">Work Experience</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#publications-awards" class="mr-4 hover:underline md:mr-6 ">Publications/Awards</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#miscellaneous" class="hover:underline">Misc.</NuxtLink>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 <NuxtLink to="https://github.com/5ei74R0" target="_blank" class="hover:underline">5ei74R0</NuxtLink>. All
        Rights Reserved.</span>
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Many thx for <NuxtLink to="https://nuxt.com/" target="_blank" class="hover:underline">Nuxt.js</NuxtLink>,
        <NuxtLink to="https://tailwindcss.com/" target="_blank" class="hover:underline">Tailwind CSS</NuxtLink>, and
        <NuxtLink to="https://flowbite.com/" target="_blank" class="hover:underline">Flowbite</NuxtLink>.
      </span>
    </div>
  </footer>
</template>