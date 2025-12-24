<script setup lang="ts">
import { ref } from 'vue';
import { useElementVisibility } from '@vueuse/core';
import LeftSide from "./about/LeftSide.vue";
import RightSide from "./about/RightSide.vue";
import templateOneData from "../../templateOneData.json";

const data = templateOneData.About;

const leftRef = ref(null);
const leftInView = useElementVisibility(leftRef);

const rightRef = ref(null);
const rightInView = useElementVisibility(rightRef);
</script>

<template>
  <section
    id="about"
    class="flex flex-wrap justify-center gap-28 py-20 relative"
  >
    <div
      ref="leftRef"
      class="group relative w-fit h-fit p-1 transition-all duration-800 ease-out"
      :class="{ 'opacity-100 translate-x-0': leftInView, 'opacity-0 -translate-x-[100px]': !leftInView }"
    >
      <LeftSide :imgURL="data.imgUrl" :availability="data.availability" />
    </div>

    <div
      ref="rightRef"
      class="space-y-6 max-w-xl transition-all duration-800 ease-out"
      :class="{ 'opacity-100 translate-x-0': rightInView, 'opacity-0 translate-x-[100px]': !rightInView }"
    >
      <RightSide
        :name="data.name"
        :tags="data.tags"
        :description="data.description"
        :resumeButton="data.resumeButton"
        :links="data.links"
      />
    </div>
  </section>
</template>
