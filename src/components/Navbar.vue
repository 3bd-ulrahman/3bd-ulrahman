<script setup lang="ts">
import templateData from "../../templateOneData.json";
const templateOneData = templateData;
</script>

<template>
  <nav>
    <ul class="fixed top-4 left-0 right-0 z-50 rounded-full bg-[#211f2a] max-w-[600px] mx-auto flex items-center justify-evenly py-4 flex-wrap">
      <li v-if="templateOneData.NavBar.about">
        <a
          href="#about"
          class="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
        >
          About
        </a>
      </li>
      <li v-if="templateOneData.NavBar.projects">
        <a
          href="#projects"
          class="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
        >
          Projects
        </a>
      </li>
      <li v-if="templateOneData.NavBar.skills">
        <a
          href="#skills"
          class="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
        >
          Skills
        </a>
      </li>
      <li v-if="templateOneData.NavBar.experience">
        <a
          href="#experience"
          class="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
        >
          Experience
        </a>
      </li>
      <li v-if="templateOneData.NavBar.contact">
        <a
          href="#contact"
          class="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
        >
          Contact
        </a>
      </li>
    </ul>
  </nav>
</template>
