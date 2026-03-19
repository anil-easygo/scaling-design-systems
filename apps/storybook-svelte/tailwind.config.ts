import type { Config } from "tailwindcss";
import preset from "@easygo-ds-tailwind-preset";

const config: Config = {
  content: [
    "./src/**/*.{svelte,ts}",
    "./stories/**/*.{svelte,ts,mdx}",
    "../../packages/components/@easygo-ds-stake-button/src/**/*.{svelte,ts}",
    "../../packages/components/@easygo-ds-stake-chat/src/**/*.{svelte,ts}",
    "../../packages/components/@easygo-ds-kick-button/src/**/*.{ts,tsx}",
  ],
  presets: [preset],
};

export default config;
