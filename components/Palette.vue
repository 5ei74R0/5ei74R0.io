<template>
  <div
    class="flex flex-grow flex-col min-h-screen min-w-full scrollbar::-webkit-scrollbar-thumb
           bg-nord-snow-1 dark:bg-nord-night-1
           md:bg-center md:bg-fixed md:bg-cover md:bg-[url('/images/bg-waterfall4.png')] md:dark:bg-[url('/images/bg-waterfall4-dark.png')]">
    <slot />
  </div>
</template>
