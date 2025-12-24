<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue';

const props = defineProps<{
  icon: string;
  name: string;
  color: string;
  index: number;
    // isEditing and onDelete omitted as not used in main display
}>();

const iconMap: { [key: string]: string } = {
    TbBrandCpp: 'tb:brand-cpp',
    SiPython: 'simple-icons:python',
    SiJavascript: 'simple-icons:javascript',
    SiTypescript: 'simple-icons:typescript',
    SiHtml5: 'simple-icons:html5',
    SiCss3: 'simple-icons:css3',
    SiTailwindcss: 'simple-icons:tailwindcss',
    SiBootstrap: 'simple-icons:bootstrap',
    SiReact: 'simple-icons:react',
    SiNextdotjs: 'simple-icons:nextdotjs',
    SiRedux: 'simple-icons:redux',
    SiGithub: 'simple-icons:github',
    SiGit: 'simple-icons:git',
    SiNodedotjs: 'simple-icons:nodedotjs',
    SiExpress: 'simple-icons:express',
    SiMongodb: 'simple-icons:mongodb',
    SiPostgresql: 'simple-icons:postgresql',
    SiMysql: 'simple-icons:mysql',
    SiDjango: 'simple-icons:django',
    SiFlask: 'simple-icons:flask',
    SiSpring: 'simple-icons:spring',
    SiPhp: 'simple-icons:php',
    SiLaravel: 'simple-icons:laravel',
    SiSharp: 'simple-icons:csharp', // Wait, check si:sharp
    SiDotnet: 'simple-icons:dotnet',
    SiRuby: 'simple-icons:ruby',
    SiRubyonrails: 'simple-icons:rubyonrails',
    SiVuedotjs: 'simple-icons:vuedotjs',
    SiAngular: 'simple-icons:angular',
    SiSvelte: 'simple-icons:svelte',
    SiNuxtdotjs: 'simple-icons:nuxtdotjs',
    SiGatsby: 'simple-icons:gatsby',
    SiFirebase: 'simple-icons:firebase',
    SiAmazon: 'simple-icons:amazon',
    SiGooglecloud: 'simple-icons:googlecloud',
    SiDocker: 'simple-icons:docker',
    SiKubernetes: 'simple-icons:kubernetes',
    SiGrafana: 'simple-icons:grafana',
    SiElasticsearch: 'simple-icons:elasticsearch',
    SiJest: 'simple-icons:jest',
    SiMocha: 'simple-icons:mocha',
    SiCypress: 'simple-icons:cypress',
    SiSelenium: 'simple-icons:selenium',
    SiFigma: 'simple-icons:figma',
    SiAdobexd: 'simple-icons:adobexd',
    SiAdobephotoshop: 'simple-icons:adobephotoshop',
    SiWordpress: 'simple-icons:wordpress',
    SiShopify: 'simple-icons:shopify',
    SiWebpack: 'simple-icons:webpack',
    SiVite: 'simple-icons:vite',
    SiSass: 'simple-icons:sass',
    SiLess: 'simple-icons:less',
    SiStyledcomponents: 'simple-icons:styledcomponents',
    SiSwift: 'simple-icons:swift',
    SiKotlin: 'simple-icons:kotlin',
    SiDart: 'simple-icons:dart',
    SiFlutter: 'simple-icons:flutter',
    SiReactivex: 'simple-icons:reactivex',
    SiGraphql: 'simple-icons:graphql',
    SiApollographql: 'simple-icons:apollographql',
    SiElixir: 'simple-icons:elixir',
    SiGo: 'simple-icons:go',
    SiRust: 'simple-icons:rust',
    SiWebgl: 'simple-icons:webgl',
    SiThreedotjs: 'simple-icons:threedotjs',
    SiElectron: 'simple-icons:electron',
    SiRaspberrypi: 'simple-icons:raspberrypi',
    SiArduino: 'simple-icons:arduino',
};

// Fallback to react icon if map misses, defaults to simple-icons:react
const iconName = computed(() => iconMap[props.icon] || 'simple-icons:react');

</script>

<template>
  <div
    class="group relative flex flex-col items-center justify-center p-6 bg-[#1a191e] rounded-lg 
      transition-all duration-300 hover:bg-gray-700 hover:transform hover:scale-105 hover:-translate-y-2
      opacity-0 animate-fade-in-up shadow-[0_0_20px_transparent] hover:shadow-[0_0_20px]"
    :style="{ animationDelay: `${index * 0.1}s` }"
  >
    <div
      class="text-4xl mb-4 transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-2 
        relative z-10"
      :style="{ color: color }"
    >
      <Icon :icon="iconName" />
    </div>

    <span
      class="absolute text-white font-medium text-lg bottom-2
        transition-all duration-300 group-hover:bottom-4"
    >
      {{ name }}
    </span>
  </div>
</template>
