<script setup>
import { computed } from 'vue';

const props = defineProps({
  anchorId: String,
  id: String,
})

const resolvedId = computed(() => props.anchorId || props.id);
</script>

<!-- Avoiding navigation bar -->
<template>
  <div :id="resolvedId" class="block scroll-mt-20"></div>
</template>
