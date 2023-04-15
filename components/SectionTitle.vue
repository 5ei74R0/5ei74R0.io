<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    required: false,
    default: "text-nord-snow-2",
  },
  textColorDark: {
    type: String,
    required: false,
    default: "text-nord-snow-2",
  },
});

const tailwindClassString = computed(() => {
  return "object-cover mt-2 text-4xl " + props.textColor + " dark:" + props.textColorDark + " font-extrabold";
});
</script>

<template>
  <h1 style="font-family: JetBrains Mono" :class="tailwindClassString">{{ title }}</h1>
  <hr class="mt-2 mb-6 border-gray-300 sm:mx-auto dark:border-gray-700" />
</template>
