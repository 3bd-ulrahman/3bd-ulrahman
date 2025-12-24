<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
  date: string;
  title: string;
  foundation: string;
  description: string;
  small: boolean;
}>();
</script>

<template>
  <div class="relative">
    <div
      :class="['absolute', !small ? 'left-1/2' : '', '-translate-x-1/2 bg-white/20 border-2 rounded-full p-2 z-10']"
    >
      <slot name="logo" />
    </div>
    <div
      :class="['relative bg-[#2a292f] p-4 rounded-2xl', !small ? 'ml-[620px] w-[380px]' : 'ml-[60px] w-full']"
    >
      <Icon
        icon="ion:ios-arrow-back"
        class="absolute left-[-22px] top-[6px] text-3xl"
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
