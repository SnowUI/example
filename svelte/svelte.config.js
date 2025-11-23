import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  preprocess: vitePreprocess(),
  compilerOptions: {
    // Enable Svelte 4 component API compatibility for Svelte 5
    compatibility: {
      componentApi: 4
    }
  }
}

