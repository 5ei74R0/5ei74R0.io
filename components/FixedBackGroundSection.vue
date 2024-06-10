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

const containerClassString = computed(() => {
  return "relative " + props.additionalClasses;
});

const bgClassString = computed(() => {
  return "absolute inset-0 bg-fixed bg-cover bg-nord-snow-0 dark:bg-nord-night-0 bg-blend-overlay " + props.bgImageString;
});
</script>

<template>
  <div :class="containerClassString">
    <div :class="bgClassString" aria-hidden="true"></div>
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
