<script setup lang="ts">
import AboutImage from "../ui/AboutImage.vue";
import AvailableForHire from "../ui/AvailableForHire.vue";
import UnavailableForHire from "../ui/UnavailableForHire.vue";
import LeftTopBorder from "../ui/LeftTopBorder.vue";
import BottomRightBorder from "../ui/BottomRightBorder.vue";

defineProps<{
  imgURL: string;
  availability: boolean;
}>();
</script>

<template>
  <div class="absolute w-full h-full inset-0 bg-gradient-to-br from-[#3b82f6] to-[#22c55e] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
  <AboutImage :imgURL="imgURL" />
  <AvailableForHire v-if="availability" />
  <UnavailableForHire v-else />
  <LeftTopBorder />
  <BottomRightBorder />
</template>
