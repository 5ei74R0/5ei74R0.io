<script setup>
import { computed } from 'vue';

const props = defineProps({
  bgImageString: {
    type: String,
    required: false,
    default: "bg-[url('/images/bg-waterfall4.png')] ",
  },
  additionalClasses: {
    type: String,
    required: false,
    default: "",
  },
})

const tailwindClassString = computed(() => {
  return "bg-fixed bg-cover bg-nord-snow-0 dark:bg-nord-night-0 bg-blend-overlay " + props.bgImageString + " " + props.additionalClasses;
});
</script>

<template>
  <div :class="tailwindClassString">
    <slot />
  </div>
</template>
