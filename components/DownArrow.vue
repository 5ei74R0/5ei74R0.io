<script setup>
const props = defineProps({
  color: {
    type: String,
    required: false,
    default: 'text-nord-night-2',
  },
  colorDark: {
    type: String,
    required: false,
    default: 'text-nord-snow-2',
  },
  additionalClasses: {
    type: String,
    required: false,
    default: "",
  },
});

const tailwindClassString = computed(() => {
  return props.color + " dark:" + props.colorDark + " " + props.additionalClasses;
});
</script>

<template>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.298595925867573 60.80539783735759"
    width="66.89578777760272" height="182.41619351207277" :class="tailwindClassString">
    <g stroke-linecap="round">
      <g transform="translate(11.421435485733696 11.128394297258922) rotate(0 -0.272137522799909 19.274304621419873)">
        <path d="M-0.87 -0.05 C-1.13 6.42, -0.59 33.38, -0.59 39.68 M0.88 -1.13 C0.39 4.98, -1 31.55, -1.42 38.17"
          stroke="currentColor" stroke-width="2" fill="none"></path>
      </g>
      <g transform="translate(11.421435485733696 11.128394297258922) rotate(0 -0.272137522799909 19.274304621419873)">
        <path d="M-7.04 20.09 C-2.82 26.74, -3.87 32.18, -1.92 39.65 M-7.9 19.34 C-5.36 25.55, -3.06 29.46, -2.34 38.29"
          stroke="currentColor" stroke-width="2" fill="none"></path>
      </g>
      <g transform="translate(11.421435485733696 11.128394297258922) rotate(0 -0.272137522799909 19.274304621419873)">
        <path d="M6.11 20.85 C5.28 27.11, -0.8 32.27, -1.92 39.65 M5.25 20.1 C4.27 26.23, 3.06 29.95, -2.34 38.29"
          stroke="currentColor" stroke-width="2" fill="none"></path>
      </g>
    </g>
    <mask></mask>
  </svg>
</template>

<style class="style-fonts">
@font-face {
  font-family: "Virgil";
  src: url("https://excalidraw.com/Virgil.woff2") format("woff2");
}
</style>
