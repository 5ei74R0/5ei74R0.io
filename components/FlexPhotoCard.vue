<script setup>
const props = defineProps({
  imgSrc: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: "XXX"
  },
  description: {
    type: String,
    default: "XXX"
  },
  linkAddress: {
    type: String,
    default: "#"
  },
});

const showImg = computed(() => props.imgSrc !== '')
</script>

<template>
  <NuxtLink :to="linkAddress"
    class="flex flex-col md:flex-row bg-nord-snow-2 border border-nord-snow-0 dark:border-nord-night-2 rounded-lg shadow md:max-w-xl hover:bg-nord-snow-1 dark:bg-nord-night-0 dark:hover:bg-nord-night-1">
    <img v-if="showImg" class="object-cover w-full h-48 md:h-auto md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
      :src="`${props.imgSrc}`" alt="">
    <slot />
  </NuxtLink>
</template>
