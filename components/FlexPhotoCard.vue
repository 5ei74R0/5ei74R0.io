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
    class="group flex w-full flex-col overflow-hidden rounded-lg border border-nord-snow-0 bg-nord-snow-2 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-nord-aurora-0 hover:bg-nord-snow-2 hover:shadow-md dark:border-nord-night-2 dark:bg-nord-night-0 dark:hover:border-nord-aurora-3 md:max-w-2xl md:flex-row">
    <img v-if="showImg" class="h-56 w-full scale-[1.015] object-cover transition duration-300 group-hover:scale-[1.04] md:h-auto md:w-64"
      :src="`${props.imgSrc}`" alt="Anonymask project demo">
    <slot />
  </NuxtLink>
</template>
