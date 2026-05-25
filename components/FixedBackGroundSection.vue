<script setup>
import { computed } from 'vue';

const props = defineProps({
  bgImageString: {
    type: String,
    required: false,
    default: "bg-[url('/5ei74R0.io/images/bg-waterfall4.png')]",
  },
  additionalClasses: {
    type: String,
    required: false,
    default: "",
  },
  overlayClass: {
    type: String,
    required: false,
    default: "bg-nord-snow-1/90 dark:bg-nord-night-1/90",
  },
})

const containerClassString = computed(() => {
  return "relative overflow-hidden " + props.additionalClasses;
});

const bgClassString = computed(() => {
  return `absolute inset-0 bg-cover bg-center opacity-20 min-[520px]:bg-fixed dark:opacity-10 ${props.bgImageString}`;
});

const overlayClassString = computed(() => {
  return `absolute inset-0 ${props.overlayClass}`;
});
</script>

<template>
  <div :class="containerClassString">
    <div :class="bgClassString" aria-hidden="true"></div>
    <div :class="overlayClassString" aria-hidden="true"></div>
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
