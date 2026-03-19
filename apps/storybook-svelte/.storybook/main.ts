import type { StorybookConfig } from "@storybook/svelte-vite";
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(svelte|ts)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/svelte-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve ?? {};
    const tokenAlias = path.resolve(__dirname, "../../../packages/@easygo-ds-design-tokens/build");
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@easygo-ds-design-tokens/build": tokenAlias
    };
    const plugin = await import("@sveltejs/vite-plugin-svelte");
    config.plugins = [
      ...(config.plugins ?? []),
      plugin.svelte({ preprocess: plugin.vitePreprocess() })
    ];
    return config;
  }
};

export default config;
