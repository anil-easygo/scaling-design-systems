import type { Meta, StoryObj } from "@storybook/svelte";
import ChatStory from "../src/examples/StakeChatStory.svelte";

const meta = {
  title: "Stake/Chat",
  component: ChatStory,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#0d1117" }],
    },
  },
} satisfies Meta<ChatStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
