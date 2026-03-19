import type { Config } from "tailwindcss";
import preset from "@easygo-ds-tailwind-preset";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./stories/**/*.{ts,tsx,mdx}",
    "../../packages/components/@easygo-ds-kick-button/src/**/*.{ts,tsx}",
    "../../packages/components/@easygo-ds-kick-chat/src/**/*.{ts,tsx}",
    "../../packages/components/@easygo-ds-stake-button/src/**/*.{svelte,ts}",
  ],
  presets: [preset],
};

export default config;
