<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
  date: string;
  title: string;
  foundation: string;
  description: string;
  // logo removed as prop, using slot
}>();
</script>

<template>
  <div class="relative">
    <div class="absolute left-1/2 -translate-x-1/2 bg-white/20 border-2 rounded-full p-2 z-10">
      <slot name="logo" />
    </div>
    <div class="relative bg-[#2a292f] p-4 w-[380px] ml-[120px] rounded-2xl">
      <Icon
        icon="ion:ios-arrow-forward"
        class="absolute right-[-22px] top-[6px] text-3xl"
      />
      <p class="text-sm text-gray-300">{{ date }}</p>
      <h3 class="text-xl font-bold text-white">{{ title }}</h3>
      <p class="text-gray-400">{{ foundation }}</p>
      <div class="text-gray-300 mt-2">
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>
