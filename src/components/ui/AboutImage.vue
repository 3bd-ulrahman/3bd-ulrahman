<script setup lang="ts">
defineProps<{
  imgURL: string
}>()
</script>

<template>
  <div class="relative max-w-[320px] rounded-2xl overflow-hidden">
    <img
      :src="imgURL"
      alt="Profile"
      class="scale-125 group-hover:scale-135 transition-all duration-500"
    />
  </div>
</template>
