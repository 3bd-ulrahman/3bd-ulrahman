<script setup lang="ts">
import SkillCard from "./ui/SkillCard.vue";
import TitleTwo from "./ui/TitleTwo.vue";
import SkillsDescription from "./skills/SkillsDescription.vue";
import templateData from "../../templateOneData.json";

const skills = templateData.Skills.skills;
const title = templateData.Skills.title;
</script>

<template>
  <section
    id="skills"
    class="my-32 mx-auto max-w-6xl px-4 space-y-6 relative"
  >
    <TitleTwo :gradient="title">My Skills</TitleTwo>

    <SkillsDescription />

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
      <SkillCard
        v-for="(skill, index) in skills"
        :key="skill.name"
        :icon="skill.icon"
        :name="skill.name"
        :color="skill.color"
        :index="index"
      />
    </div>
  </section>
</template>
