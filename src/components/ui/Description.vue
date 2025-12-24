<script setup lang="ts">
import { computed } from 'vue';

type TextSegment = {
  id: string;
  text: string;
  color?: string;
};

interface DescriptionProps {
  content: string;
  highlights: {
    start: number;
    end: number;
    color: string;
  }[];
}

const props = defineProps<DescriptionProps>();

const segments = computed<TextSegment[]>(() => {
    const initialSegments: TextSegment[] = [];
    let lastIndex = 0;
    const sortedHighlights = [...props.highlights].sort((a, b) => a.start - b.start);

    sortedHighlights.forEach((highlight) => {
      if (highlight.start > lastIndex) {
        initialSegments.push({
          id: crypto.randomUUID(),
          text: props.content.slice(lastIndex, highlight.start),
        });
      }

      initialSegments.push({
        id: crypto.randomUUID(),
        text: props.content.slice(highlight.start, highlight.end),
        color: highlight.color,
      });

      lastIndex = highlight.end;
    });

    if (lastIndex < props.content.length) {
      initialSegments.push({
        id: crypto.randomUUID(),
        text: props.content.slice(lastIndex),
      });
    }

    return initialSegments;
});
</script>

<template>
  <div class="relative group">
    <div
      id="content"
      class="relative whitespace-pre-line max-w-[620px] text-gray-700 dark:text-white/80 
               text-lg md:text-xl leading-relaxed cursor-text"
    >
      <span
        v-for="segment in segments"
        :key="segment.id"
        :style="{ color: segment.color }"
        class="relative"
      >
        {{ segment.text }}
        <span
            v-if="segment.color"
            class="absolute bottom-0 left-0 w-full h-[2px] opacity-50"
            :style="{ backgroundColor: segment.color }"
        />
      </span>
    </div>
  </div>
</template>
