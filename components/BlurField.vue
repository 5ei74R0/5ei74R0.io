<script setup>
const props = defineProps({
  blurLevel: {
    type: String,
    default: "md"
  },
  additionalClasses: {
    type: String,
    required: false,
    default: "",
  },
})

const tailwindClassString = computed(() => {
  return "bg-clip-padding backdrop-filter backdrop-blur-" + props.blurLevel.valueOf() + " bg-opacity-0 p-4 flex-grow max-w-screen-md mx-10 " + props.additionalClasses;
});
</script>

<template>
  <div :class="tailwindClassString">
    <slot />
  </div>
</template>
