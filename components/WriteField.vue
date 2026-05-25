<script setup>
import { computed } from 'vue';

const props = defineProps({
  additionalClasses: {
    type: String,
    required: false,
    default: "",
  },
})

const tailwindClassString = computed(() => {
  return "w-full flex-grow px-5 py-14 sm:px-8 md:max-w-screen-md md:py-20 " + props.additionalClasses;
});
</script>

<template>
  <div :class="tailwindClassString">
    <slot />
  </div>
</template>
