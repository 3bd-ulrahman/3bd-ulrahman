<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";
import templateOneData from "../templateOneData.json";
</script>

<template>
  <div class="max-w-[1300px] mx-auto px-12 min-h-screen text-white pt-[100px]">
    <Navbar />
    <About v-if="templateOneData.NavBar.about" />
    <Projects v-if="templateOneData.NavBar.projects" />
    <Skills v-if="templateOneData.NavBar.skills" />
    <Experience v-if="templateOneData.NavBar.experience" />
    <Contact v-if="templateOneData.NavBar.contact" />
  </div>
</template>
