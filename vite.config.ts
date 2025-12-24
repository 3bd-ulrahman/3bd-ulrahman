import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/3bd-ulrahman/",
  plugins: [vue(), tailwindcss()],
  build: {
    outDir: "docs"
  }
});
