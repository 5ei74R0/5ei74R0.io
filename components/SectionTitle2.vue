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
});

const tailwindClassString = computed(() => {
  // return "object-cover mt-2 text-4xl " + props.textColor + " dark:" + props.textColorDark + " font-extrabold " + props.additionalClasses;
  return "mt-2 font-extrabold " + "text-[#555]" + " text-4xl text-opacity-60 bg-clip-text bg-fixed bg-cover " + props.bgImageString + props.additionalClasses;
});
</script>

<template>
  <h1 style="font-family: JetBrains Mono; filter: invert();" :class="tailwindClassString">
    <NuxtLink :to="linkToItself">
      {{ title }}
    </NuxtLink>
  </h1>
  <hr class="mt-2 mb-6 border-gray-300 sm:mx-auto dark:border-gray-700" />
</template>
