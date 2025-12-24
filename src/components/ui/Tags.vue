<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  tags: string[]
}>();

const currentIndex = ref(0);
let interval: ReturnType<typeof setInterval>;

onMounted(() => {
  if (props.tags.length > 0) {
    interval = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % props.tags.length;
    }, 2000);
  }
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="relative">
    <div class="w-fit px-4 py-2 bg-black backdrop-blur-md border border-white/10 rounded-full shadow-sm overflow-hidden">
      <span>✨</span>
      <span class="typing">{{ tags[currentIndex] }}</span>
    </div>
  </div>
</template>
