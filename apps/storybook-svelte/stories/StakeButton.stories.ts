import type { Meta, StoryObj } from "@storybook/svelte";
import StakeButtonStory from "../src/examples/StakeButtonStory.svelte";
import StakeButtonSizes from "../src/examples/StakeButtonSizes.svelte";

const meta = {
  title: "Stake/Button",
  component: StakeButtonStory,
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md"]
    }
  },
  args: {
    label: "Primary action",
    size: "md",
    disabled: false,
    loading: false,
    fullWidth: false
  },
  parameters: {
    docs: {
      description: {
        component: "Stake consumes the same semantic token keys but resolves Stake-specific values."
      }
    }
  }
} satisfies Meta<StakeButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled"
  }
};

export const Loading: Story = {
  args: {
    loading: true,
    label: "Loading"
  }
};

export const Sizes: Story = {
  render: (args) => ({
    Component: StakeButtonSizes,
    props: {
      disabled: args.disabled,
      loading: args.loading,
      fullWidth: args.fullWidth
    }
  }),
  argTypes: {
    size: { control: false }
  }
};
