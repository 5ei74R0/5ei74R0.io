<script setup>
import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&family=JetBrains+Mono:wght@200;400;600;800&family=Dancing+Script&family=Noto+Sans+Display:wght@300;500&family=Noto+Sans+JP:wght@300;500;700&display=swap');

::-webkit-scrollbar {
  background-color: transparent;
  height: .6em;
  width: .6em
}

::-webkit-scrollbar-track {
  --tw-bg-opacity: 1;
  background-color: #333;
  /* background-color: rgb(244 244 245/var(--tw-bg-opacity)) */
}

::-webkit-scrollbar-thumb {
  --tw-bg-opacity: 1;
  background-color: #666;
  /* background-color: rgb(212 212 216/var(--tw-bg-opacity)); */
  /* border-radius: .6em */
}

::-webkit-scrollbar-thumb:hover {
  --tw-bg-opacity: 1;
  background-color: #777;
  /* background-color: rgb(161 161 170/var(--tw-bg-opacity)) */
}
</style>