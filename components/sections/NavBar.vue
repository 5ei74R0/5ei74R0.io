<script setup>
import { initFlowbite } from 'flowbite';
import { onMounted, ref } from 'vue';

onMounted(() => {
  initFlowbite();
})

const isActive = ref(false)

function toggleHamburger() {
  isActive.value = !isActive.value
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 z-20 w-full border-b border-nord-snow-0/80 bg-nord-snow-2/90 shadow-sm backdrop-blur-md dark:border-nord-night-2/80 dark:bg-nord-night-0/90">
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-5 py-3 sm:px-8">
      <NuxtLink to="#about" class="flex items-center" aria-label="Back to top">
        <Logo class="h-9" />
      </NuxtLink>
      <div class="flex items-center md:order-2">
        <DarkModeButton />
        <div class="w-4"></div>
        <IconButton />
        <!-- Dropdown menu -->
        <div
          class="z-50 my-4 hidden w-64 max-w-[calc(100vw-2rem)] list-none divide-y divide-nord-snow-0 rounded-lg border border-nord-snow-0 bg-nord-snow-2 text-base shadow-lg dark:divide-nord-night-2 dark:border-nord-night-2 dark:bg-nord-night-0"
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
                class="inline-flex w-full items-center gap-2 px-4 py-2 text-sm text-nord-night-0 transition-colors hover:bg-nord-snow-1 hover:text-nord-aurora-0 dark:text-nord-snow-1 dark:hover:bg-nord-night-1 dark:hover:text-nord-aurora-3">
                <ServiceIcon name="github" />
                GitHub
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://scholar.google.co.jp/citations?user=koZVTJ4AAAAJ&hl=en"
                class="inline-flex w-full items-center gap-2 px-4 py-2 text-sm text-nord-night-0 transition-colors hover:bg-nord-snow-1 hover:text-nord-aurora-0 dark:text-nord-snow-1 dark:hover:bg-nord-night-1 dark:hover:text-nord-aurora-3">
                <ServiceIcon name="scholar" />
                Google Scholar
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://www.linkedin.com/in/seitaro-otsuki-156723310/"
                class="inline-flex w-full items-center gap-2 px-4 py-2 text-sm text-nord-night-0 transition-colors hover:bg-nord-snow-1 hover:text-nord-aurora-0 dark:text-nord-snow-1 dark:hover:bg-nord-night-1 dark:hover:text-nord-aurora-3">
                <ServiceIcon name="linkedin" />
                LinkedIn
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://zenn.dev/5ei74r0"
                class="inline-flex w-full items-center gap-2 px-4 py-2 text-sm text-nord-night-0 transition-colors hover:bg-nord-snow-1 hover:text-nord-aurora-0 dark:text-nord-snow-1 dark:hover:bg-nord-night-1 dark:hover:text-nord-aurora-3">
                <ServiceIcon name="zenn" />
                Zenn
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://openreview.net/profile?id=~Seitaro_Otsuki1"
                class="inline-flex w-full items-center gap-2 px-4 py-2 text-sm text-nord-night-0 transition-colors hover:bg-nord-snow-1 hover:text-nord-aurora-0 dark:text-nord-snow-1 dark:hover:bg-nord-night-1 dark:hover:text-nord-aurora-3">
                <ServiceIcon name="openreview" />
                OpenReview
              </NuxtLink>
            </li>
          </ul>
        </div>
        <button id="hamburger-button" data-collapse-toggle="mobile-menu-2" type="button"
          class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-nord-night-1 hover:bg-nord-snow-1 focus:outline-none focus:ring-2 focus:ring-nord-snow-1 dark:text-nord-snow-1 dark:hover:bg-nord-night-1 dark:focus:ring-nord-night-1 md:hidden"
          aria-controls="mobile-menu-2" aria-expanded="false" @click="toggleHamburger">
          <span class="sr-only">Open main menu</span>
          <svg :class="['hamburger-svg w-6 h-6', { active: isActive }]" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path class="line" d="M7 16 27 16"></path>
          </svg>
          <!-- 
          This hamburger SVG and its animation is created by JulanDeAlb (JulanDeAlb) and is modified by 5ei74R0 to fit the design of this website.
          Copyright - 2024 JulanDeAlb (JulanDeAlb) 
          Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
          The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
          THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          -->
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
        <ul
          class="mt-4 flex flex-col rounded-lg border border-nord-snow-0 bg-nord-snow-2 p-4 font-medium dark:border-nord-night-2 dark:bg-nord-night-0 md:mt-0 md:flex-row md:space-x-7 md:border-0 md:bg-transparent md:p-0 md:dark:bg-transparent">
          <li>
            <NuxtLink to="#work-experience"
              class="block py-2 pl-3 pr-4 text-nord-night-0 rounded hover:bg-nord-snow-1 md:hover:bg-transparent md:focus:text-nord-aurora-0 md:hover:text-nord-aurora-0 md:p-0 dark:text-nord-snow-2 md:dark:focus:text-nord-aurora-3 md:dark:hover:text-nord-aurora-3 dark:hover:bg-nord-night-1 dark:hover:text-nord-aurora-3 md:dark:hover:bg-transparent dark:border-nord-night-0">
              Experience</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#publications-awards"
              class="block py-2 pl-3 pr-4 text-nord-night-0 rounded hover:bg-nord-snow-1 md:hover:bg-transparent md:focus:text-nord-aurora-0 md:hover:text-nord-aurora-0 md:p-0 dark:text-nord-snow-2 md:dark:focus:text-nord-aurora-3 md:dark:hover:text-nord-aurora-3 dark:hover:bg-nord-night-1 dark:hover:text-nord-aurora-3 md:dark:hover:bg-transparent dark:border-nord-night-0">
              Publications</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#projects"
              class="block py-2 pl-3 pr-4 text-nord-night-0 rounded hover:bg-nord-snow-1 md:hover:bg-transparent md:focus:text-nord-aurora-0 md:hover:text-nord-aurora-0 md:p-0 dark:text-nord-snow-2 md:dark:focus:text-nord-aurora-3 md:dark:hover:text-nord-aurora-3 dark:hover:bg-nord-night-1 dark:hover:text-nord-aurora-3 md:dark:hover:bg-transparent dark:border-nord-night-0">
              Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#writing"
              class="block py-2 pl-3 pr-4 text-nord-night-0 rounded hover:bg-nord-snow-1 md:hover:bg-transparent md:focus:text-nord-aurora-0 md:hover:text-nord-aurora-0 md:p-0 dark:text-nord-snow-2 md:dark:focus:text-nord-aurora-3 md:dark:hover:text-nord-aurora-3 dark:hover:bg-nord-night-1 dark:hover:text-nord-aurora-3 md:dark:hover:bg-transparent dark:border-nord-night-0">
              Writing</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.hamburger-svg {
  cursor: pointer;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line-top-bottom {
  stroke-dasharray: 12 63;
}

.hamburger-svg.active {
  transform: rotate(-45deg);
}

.hamburger-svg.active .line-top-bottom {
  stroke-dasharray: 20 300;
  stroke-dashoffset: -32.42;
}
</style>
