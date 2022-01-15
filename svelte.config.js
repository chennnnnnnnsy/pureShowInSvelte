import sveltePreprocess from "svelte-preprocess";

// 这个配置会自动被@sveltejs/vite-plugin-svelte 这个vite的插件加载

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
};
