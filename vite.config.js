import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // build: {
  //   sourcemap: true
  // }
  css: {
    postcss: {
      plugins: [autoprefixer, tailwindcss],
    },
  },
});
