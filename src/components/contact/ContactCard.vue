<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface PreviewContactCardProps {
  title: string;
  // icon prop -> slot 'icon'
  value: string;
  color: {
    primary: string;
    secondary: string;
    hover: string;
  };
  link?: {
    href: string;
    // icon -> slot 'linkIcon'
  };
  additionalInfo?: string;
}

defineProps<PreviewContactCardProps>();

const isVisible = ref(false);

onMounted(() => {
    // Simple delay for animation on mount/appear
    setTimeout(() => {
        isVisible.value = true;
    }, 200);
});
</script>

<template>
  <div
    class="relative flex flex-col items-center justify-center p-8 rounded-xl bg-[#1a191e] hover:bg-[#25242a] transition-all h-full duration-500"
    :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
  >
    <div :class="['p-5', color.secondary, 'rounded-full mb-5']">
        <slot name="icon" />
    </div>

    <h3 class="text-2xl font-bold mb-2">{{ title }}</h3>

    <a
      v-if="link"
      :href="link.href"
      :class="['text-gray-300 transition-colors flex items-center gap-2 justify-center', `hover:${color.primary}`]"
    >
      {{ value }}
      <slot name="linkIcon" />
    </a>
    
    <div v-else>
      <p class="text-gray-300 text-center">{{ value }}</p>
      <p v-if="additionalInfo" class="text-gray-400 text-sm mt-2 text-center">
        {{ additionalInfo }}
      </p>
    </div>
  </div>
</template>
