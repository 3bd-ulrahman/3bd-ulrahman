<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  color: string;
}>();

const isCustomColor = computed(() => props.color.startsWith("text-["));
const customColorStyle = computed(() => isCustomColor.value ? { color: props.color.slice(6, -1) } : {});
</script>

<template>
  <span
    :class="[color, 'px-3 py-1 text-sm font-medium rounded-full bg-gray-800 transition-transform hover:-translate-y-1 hover:shadow-lg duration-200']"
    :style="customColorStyle"
  >
    <slot />
  </span>
</template>
