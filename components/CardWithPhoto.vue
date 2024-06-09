<script setup>
const props = defineProps({
  imgSrc: String,
  title: { type: String, default: "XXX" },
  description: { type: String, default: "XXX" },
  linkAddress: { type: String, default: "#" },
});

const showImg = computed(() => props.imgSrc !== '');
</script>

<template>
  <NuxtLink :to="linkAddress"
    class="flex flex-col md:flex-row bg-nord-snow-2 border border-nord-snow-0 dark:border-nord-night-2 rounded-lg shadow md:max-w-xl hover:bg-nord-snow-1 dark:bg-nord-night-0 dark:hover:bg-nord-night-1">
    <img v-if="showImg" class="object-cover w-full h-48 md:h-auto md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
      :src="imgSrc" alt="">
    <div class="flex flex-col justify-start p-4 leading-normal">
      <h5 class="mb-2 text-xl font-bold tracking-tight text-nord-night-0 dark:text-nord-snow-2">
        {{ title }}
      </h5>
      <p class="mb-3 font-normal text-nord-night-2 dark:text-nord-snow-0">
        {{ description }}</p>
    </div>
  </NuxtLink>
</template>
