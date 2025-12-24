<script setup lang="ts">
import { ref } from 'vue';
import { useElementVisibility } from '@vueuse/core';
import { Icon } from '@iconify/vue';
import TitleTwo from "./ui/TitleTwo.vue";
import ContactCard from "./contact/ContactCard.vue";
import templateData from "../../templateOneData.json";

const data = templateData.Contact.contact;

// Animation logic using useElementVisibility
const cardsRef = ref(null);
const cardsInView = useElementVisibility(cardsRef);
const footerRef = ref(null);
const footerInView = useElementVisibility(footerRef);

</script>

<template>
  <section
    id="contact"
    class="relative my-32 mx-auto max-w-6xl px-4 space-y-10"
  >
    <TitleTwo :gradient="templateData.Contact.title">Get In Touch</TitleTwo>

    <p class="text-lg font-medium text-white/60 max-w-3xl text-center mx-auto mb-12">
      I'm always open to new opportunities and collaborations. Feel free to
      reach out through any of these channels.
    </p>

    <div
      ref="cardsRef"
      class="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-out"
      :class="{ 'opacity-100 translate-y-0': cardsInView, 'opacity-0 translate-y-20': !cardsInView }"
    >
      <ContactCard
        title="Email"
        :value="data.email"
        :color="{
          primary: 'text-blue-400',
          secondary: 'bg-blue-500/20',
          hover: 'bg-blue-500/30',
        }"
        :link="{
          href: `mailto:${data.email}`,
        }"
      >
        <template #icon>
            <Icon icon="feather:mail" class="text-4xl text-blue-500" />
        </template>
      </ContactCard>

      <ContactCard
        title="Phone & WhatsApp"
        :value="data.phone"
        :color="{
          primary: 'text-green-400',
          secondary: 'bg-green-500/20',
          hover: 'bg-green-500/30',
        }"
        :link="{
          href: `https://wa.me/${data.phone.replace(/[^0-9]/g, '')}`,
        }"
      >
        <template #icon>
            <Icon icon="feather:phone" class="text-4xl text-green-500" />
        </template>
        <template #linkIcon>
            <Icon icon="fa6-brands:whatsapp" class="text-green-500 text-xl" />
        </template>
      </ContactCard>

      <ContactCard
        title="Location"
        :value="data.location"
        :color="{
          primary: 'text-purple-400',
          secondary: 'bg-purple-500/20',
          hover: 'bg-purple-500/30',
        }"
        additionalInfo="Available for remote work worldwide"
      >
        <template #icon>
            <Icon icon="feather:map-pin" class="text-4xl text-purple-500" />
        </template>
      </ContactCard>
    </div>

    <div
      ref="footerRef"
      class="mt-16 text-center transition-all duration-500 ease-out"
      :class="{ 'opacity-100 translate-y-0': footerInView, 'opacity-0 translate-y-20': !footerInView }"
    >
      <h3 class="text-2xl font-bold mb-4">
        Looking Forward to Hearing from You!
      </h3>
      <p class="text-lg text-gray-300 max-w-2xl mx-auto">
        Whether you have a project in mind, a job opportunity, or just want to
        say hello, don't hesitate to reach out. I typically respond within 24
        hours.
      </p>
    </div>
  </section>
</template>
