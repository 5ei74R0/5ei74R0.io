<script setup>
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
  // return "object-cover mt-2 text-4xl " + props.textColor + " dark:" + props.textColorDark + " font-extrabold " + props.additionalClasses;
  return "mt-2 font-light text-4xl text-nord-night-0 dark:text-nord-snow-1" + props.additionalClasses;
});
</script>

<template>
  <h1 :class="tailwindClassString">
    <NuxtLink :to="linkToItself">
      {{ title }}
    </NuxtLink>
  </h1>
  <hr class="mt-2 mb-6 border-gray-300 sm:mx-auto dark:border-gray-700" />
</template>
