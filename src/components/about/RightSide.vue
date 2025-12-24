<script setup lang="ts">
import Tags from "../ui/Tags.vue";
import Title from "../ui/Title.vue";
import Slider from "../ui/Slider.vue";
import Description from "../ui/Description.vue";
import { Icon } from '@iconify/vue';

interface RightSideProps {
  name: {
    content: string;
    gradient: string;
  };
  tags: string[];
  description: {
    content: string;
    highlights: {
      start: number;
      end: number;
      color: string;
    }[];
  };
  resumeButton: {
    resumeLink: string;
    resumeGradient: string;
    resumeColor1: string;
  };
  links: {
    id: string;
    link: string;
    preview: boolean;
  }[];
}

defineProps<RightSideProps>();

const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return "fa6-brands:github";
      case "linkedin":
        return "fa6-brands:linkedin";
      case "x":
        return "fa6-brands:x-twitter";
      case "codeforces":
        return "simple-icons:codeforces";
      case "leetcode":
        return "simple-icons:leetcode";
      default:
        return "fa6-brands:github";
    }
};

const onMouseEnterResume = (e: MouseEvent, color: string) => {
    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px -5px ${color}`;
};

const onMouseLeaveResume = (e: MouseEvent) => {
    (e.currentTarget as HTMLElement).style.boxShadow = "none";
};

</script>

<template>
  <Tags :tags="tags" />
  <Title :name="name" />
  <Slider />
  <Description
    :highlights="description.highlights"
    :content="description.content"
  />
  <div class="flex items-center gap-4 mt-8">
    <div class="relative group">
      <button
        class="relative px-8 py-4 font-bold rounded-lg transition-all duration-300 group-hover:scale-105 cursor-pointer"
        :style="{
          background: resumeButton.resumeGradient,
          boxShadow: 'none',
          transition: 'all 0.3s',
        }"
        @mouseenter="(e) => onMouseEnterResume(e, resumeButton.resumeColor1)"
        @mouseleave="onMouseLeaveResume"
      >
        <a
          :href="resumeButton.resumeLink"
          target="_blank"
          rel="noopener noreferrer"
          class="relative flex items-center gap-2"
        >
          <span class="bg-gradient-to-r from-white to-[#d4fff1] bg-clip-text text-transparent">
            View My Resume
          </span>
          <Icon icon="fa6-solid:arrow-right" />
        </a>
      </button>
    </div>

    <ul class="flex items-center gap-4 ml-2">
      <li
        v-for="link in links.filter(l => l.preview)"
        :key="link.id"
        class="relative p-2 rounded-full hover:bg-white/10 transition-all duration-300 group text-white"
      >
        <a :href="link.link" target="_blank" rel="noopener noreferrer">
          <Icon
            :icon="getIcon(link.id)"
            width="32" 
            class="drop-shadow-lg transition-all duration-300 hover:scale-110"
          />
        </a>
      </li>
    </ul>
  </div>
</template>
