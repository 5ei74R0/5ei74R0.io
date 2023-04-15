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
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 242.90549268128086 96.47108798852423"
    :class="tailwindClassString">
    <g stroke-linecap="round">
      <g
        transform="translate(35.57230389564461 7.556960965632641) rotate(182.48453873365986 73.36898854746755 34.06429176916072)">
        <path
          d="M-0.6 -1.19 C-2.92 10.06, -43.04 66.09, -14.37 68.08 C14.29 70.07, 140.78 20.33, 171.39 10.75 M1.29 0.8 C-0.61 12.14, -40.42 67.42, -12.1 69.27 C16.22 71.12, 141.02 21.54, 171.22 11.91"
          stroke="currentColor" stroke-width="1" fill="none"></path>
      </g>
      <g
        transform="translate(35.57230389564461 7.556960965632641) rotate(182.48453873365986 73.36898854746755 34.06429176916072)">
        <path d="M-4.29 27.37 C-3.09 22.78, -2.07 11.47, -1.34 -0.02 M-2.38 28.51 C-2.71 20.3, -2.16 14.63, 0.08 -1.54"
          stroke="currentColor" stroke-width="1" fill="none"></path>
      </g>
      <g
        transform="translate(35.57230389564461 7.556960965632641) rotate(182.48453873365986 73.36898854746755 34.06429176916072)">
        <path
          d="M-23.14 19.27 C-16.96 16.9, -10.99 7.72, -1.34 -0.02 M-21.23 20.41 C-16.75 14.19, -11.45 10.57, 0.08 -1.54"
          stroke="currentColor" stroke-width="1" fill="none"></path>
      </g>
    </g>
    <mask></mask>
    <g transform="translate(47.38319692351888 25.991071175711795) rotate(0 70.70396423339844 22.5)"><text x="0" y="0"
        font-family="Virgil" font-size="36px" fill="currentColor" text-anchor="start" style="white-space: pre;"
        direction="ltr" dominant-baseline="text-before-edge">5ei74R0</text></g>
    <g stroke-linecap="round">
      <g transform="translate(46.186896096510964 22.756644401042763) rotate(0 82.22277166743675 31.301920551046408)">
        <path
          d="M-0.11 -1.11 C-1.79 9.53, -41.53 62.23, -10.4 63.68 C20.74 65.14, 153.71 16.81, 186.72 7.62 M-1.63 0.92 C-2.93 11.21, -39.47 60.51, -8.26 61.79 C22.95 63.08, 152.91 17.31, 185.64 8.65"
          stroke="currentColor" stroke-width="2" fill="none"></path>
      </g>
      <g transform="translate(46.186896096510964 22.756644401042763) rotate(0 82.22277166743675 31.301920551046408)">
        <path d="M-3.52 27.03 C-0.45 19.57, -1.68 12.9, 0.46 -0.44 M-1.76 29.39 C-1.71 18.34, -0.44 7.27, -0.57 -1.98"
          stroke="currentColor" stroke-width="2" fill="none"></path>
      </g>
      <g transform="translate(46.186896096510964 22.756644401042763) rotate(0 82.22277166743675 31.301920551046408)">
        <path
          d="M-22.41 19.02 C-14.14 13.79, -10.15 9.33, 0.46 -0.44 M-20.65 21.38 C-13.82 13.01, -5.83 4.79, -0.57 -1.98"
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
