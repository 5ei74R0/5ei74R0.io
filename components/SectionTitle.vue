<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  linkToItself: {
    type: String,
    required: true,
    default: "#",
  },
  additionalClasses: {
    type: String,
    required: false,
    default: "",
  },
});

const tailwindClassString = computed(() => {
  return "text-3xl font-semibold leading-tight text-nord-night-0 dark:text-nord-snow-1 sm:text-4xl " + props.additionalClasses;
});
</script>

<template>
  <h2 :class="tailwindClassString">
    <NuxtLink :to="linkToItself">
      {{ title }}
    </NuxtLink>
  </h2>
  <div class="mt-3 mb-8 h-px w-20 bg-nord-aurora-0 dark:bg-nord-aurora-3" aria-hidden="true"></div>
</template>
