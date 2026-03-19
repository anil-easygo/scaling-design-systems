import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/react-vite",
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
    return config;
  }
};

export default config;
