<script setup>
const props = defineProps({
  additionalClasses: {
    type: String,
    required: false,
    default: "",
  },
})

const tailwindClassString = computed(() => {
  return "p-4 flex-grow max-w-screen-md my-8 " + props.additionalClasses;
});
</script>

<template>
  <div :class="tailwindClassString">
    <slot />
  </div>
</template>
