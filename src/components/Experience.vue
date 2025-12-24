<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';
import { Icon } from '@iconify/vue';
import TitleTwo from "./ui/TitleTwo.vue";
import ExperienceCardLeft from "./ui/ExperienceCardLeft.vue";
import ExperienceCardRight from "./ui/ExperienceCardRight.vue";
import templateData from "../../templateOneData.json";

const data = templateData.Experiences.experience;
const isLargeScreen = useMediaQuery('(min-width: 1250px)');

const getIconName = (iconName?: string) => {
  switch (iconName) {
    case "Education":
      return "fa6-solid:graduation-cap";
    case "Development":
      return "fa6-solid:code";
    case "Programming":
      return "fa6-solid:laptop-code";
    default:
      return "fa6-solid:graduation-cap";
  }
};
</script>

<template>
  <section
    id="experience"
    class="relative my-32 mx-auto max-w-6xl px-4 space-y-6"
  >
    <TitleTwo :gradient="templateData.Experiences.title">
      My Experience
    </TitleTwo>

    <template v-if="isLargeScreen">
      <div class="absolute left-1/2 w-1 h-full bg-white/60 transform -translate-x-1/2" />
      <ul class="py-4 space-y-12 relative">
        <template v-for="(item, index) in data" :key="index">
          <div class="relative">
            <component
              :is="item.left ? ExperienceCardLeft : ExperienceCardRight"
              :date="item.period || ''"
              :title="item.title"
              :foundation="item.company"
              :description="item.description"
              :small="false"
            >
                <template #logo>
                    <Icon :icon="getIconName(item.icon)" class="w-6 h-6" />
                </template>
            </component>
          </div>
        </template>
      </ul>
    </template>

    <template v-else>
      <div class="absolute w-1 h-full bg-white/60 transform -translate-x-1/2" />
      <ul class="space-y-12">
        <div v-for="(item, index) in data" :key="index" class="relative">
          <ExperienceCardLeft
            :date="item.period || ''"
            :title="item.title"
            :foundation="item.company"
            :description="item.description"
            :small="true"
          >
             <template #logo>
                <Icon :icon="getIconName(item.icon)" class="w-6 h-6" />
             </template>
          </ExperienceCardLeft>
        </div>
      </ul>
    </template>
  </section>
</template>
