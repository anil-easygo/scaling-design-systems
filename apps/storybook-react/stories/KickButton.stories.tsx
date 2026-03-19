import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@easygo-ds-kick-button";
import type { ButtonProps } from "@easygo-ds-kick-button";

const meta: Meta<ButtonProps> = {
  title: "Kick/Button",
  component: Button,
  args: {
    children: "Primary action",
    variant: "primary",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        component:
          "Kick uses semantic tokens, so swapping to Stake only requires importing a different tokens.css file."
      }
    }
  }
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Playground: Story = {
  args: {
    fullWidth: false
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled"
  }
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading"
  }
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">SM</span>
        <Button {...args} size="sm">
          Small CTA
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">MD</span>
        <Button {...args} size="md">
          Medium CTA
        </Button>
      </div>
    </div>
  )
};
