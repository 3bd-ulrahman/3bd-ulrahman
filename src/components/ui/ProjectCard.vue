<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface Technology {
  name: string;
  color: string;
}

defineProps<{
  title: string;
  description: string;
  technologies: Technology[];
  liveDemo?: string;
  repo?: string;
  img: string;
}>();
</script>

<template>
  <div class="relative group h-full">
    <div class="relative h-full p-[2px] bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl group transform transition-all duration-500 hover:-translate-y-2">
      <div class="bg-[#1a191e] p-6 rounded-3xl h-full space-y-4 relative overflow-hidden">
        <div class="aspect-video overflow-hidden rounded-xl border-2 border-white/10 relative">
          <img
            :src="img"
            :alt="title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        <div class="flex flex-col justify-between space-y-6">
          <h3 class="text-2xl font-bold">{{ title }}</h3>
          <p class="text-gray-300 leading-relaxed">{{ description }}</p>      
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tech, index) in technologies"
              :key="index"
              :class="['px-3 py-1 text-sm font-medium rounded-full bg-gray-800 transition-transform hover:-translate-y-1 hover:shadow-lg duration-200', tech.color]"
            >
              {{ tech.name }}
            </span>
          </div>
          <div class="flex gap-3 mt-4">
            <a
              v-if="liveDemo"
              :href="liveDemo"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 px-4 py-2.5 w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white rounded-xl transition-all relative overflow-hidden"
            >
              <Icon icon="ion:play-circle-outline" class="w-5 h-5" />
              <span class="font-semibold tracking-wide">Live Demo</span>
            </a>

            <a
              v-if="repo"
              :href="repo"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 px-4 py-2.5 w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white rounded-xl transition-all relative overflow-hidden"
            >
              <Icon icon="fa6-brands:github" class="w-5 h-5" />
              <span class="font-semibold tracking-wide">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
