import type { Preview } from "@storybook/svelte";
import "@easygo-ds-design-tokens/build/stake/tokens.css";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: "centered"
  }
};

export default preview;
