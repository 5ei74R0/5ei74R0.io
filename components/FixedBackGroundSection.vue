<script setup>
import { computed } from 'vue';

const props = defineProps({
  bgImageString: {
    type: String,
    required: false,
    default: "bg-[url(/images/snowy-mountains2_x2.png)] ",
  },
  additionalClasses: {
    type: String,
    required: false,
    default: "",
  },
})

const tailwindClassString = computed(() => {
  return "bg-fixed bg-cover bg-nord-snow-2 dark:bg-nord-night-3 bg-blend-multiply " + props.bgImageString + " " + props.additionalClasses;
});
</script>

<template>
  <div :class="tailwindClassString">
    <slot />
  </div>
</template>
