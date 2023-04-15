<script setup>
const props = defineProps({
  anchorId: String,
})
</script>

<!-- Avoiding navigation bar -->
<template>
  <div :id="anchorId" style="display: block; padding-top: 64px; margin-top: -64px;"></div>
</template>
