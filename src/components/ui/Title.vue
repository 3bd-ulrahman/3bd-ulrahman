<script setup lang="ts">
defineProps<{
  name: {
    content: string;
    gradient: string;
  };
}>();
</script>

<template>
  <h1 class="font-bold text-4xl tracking-tight">
    Hello, I am
    <span class="relative text-4xl sm:text-5xl md:text-6xl inline-block">
      <span
        class="relative outline-none focus:border-b-2 focus:border-purple-500"
        :style="{
          backgroundImage: name.gradient,
          backgroundSize: '200% 200%',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }"
      >
        {{ name.content }}
      </span>

      <span class="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-purple-600/20 blur-md rounded-full" />
    </span>
  </h1>
</template>
