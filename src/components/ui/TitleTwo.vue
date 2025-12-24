<script setup lang="ts">
defineProps<{
  gradient: string;
}>();
</script>

<template>
  <h1 class="relative font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl text-center h-[70px]">
    <span class="relative inline-block">
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-purple-500"
        :style="{
          backgroundImage: gradient,
          backgroundSize: '200% 200%',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }"
      >
        <slot />
      </span>

      <span class="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-purple-600/20 blur-md rounded-full"></span>
    </span>
  </h1>
</template>
