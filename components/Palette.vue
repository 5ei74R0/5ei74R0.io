<template>
  <div class="relative min-h-screen">
    <slot />
  </div>
  </template>
  
  <style scoped>
  .relative::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      z-index: -1000;
  }
  
  .relative::before {
  background-image: url('/images/bg-waterfall4.png');
  }
  
  .dark .relative::before {
  background-image: url('/images/bg-waterfall4-dark.png');
  }
  </style>