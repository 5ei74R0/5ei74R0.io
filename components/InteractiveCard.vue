<script setup>
const props = defineProps({
  linkAddress: String,
});
</script>

<template>
  <NuxtLink :to="linkAddress"
    class="flex flex-col md:flex-row bg-nord-snow-2 border border-nord-snow-0 dark:border-nord-night-2 rounded-lg shadow md:max-w-xl hover:bg-nord-snow-1 dark:bg-nord-night-0 dark:hover:bg-nord-night-1">
    <slot />
  </NuxtLink>
</template>
