import type { Config } from "tailwindcss";

type Dictionary = Record<string, string>;

const toCssVar = (tokenName: string) => `var(${tokenName})`;

const spaceVars: Dictionary = {
  "0": "--core-space-0",
  "0.5": "--core-space-0-5",
  "1": "--core-space-1",
  "1.5": "--core-space-1-5",
  "2": "--core-space-2",
  "3": "--core-space-3",
  "4": "--core-space-4",
  "5": "--core-space-5",
  "6": "--core-space-6",
  "8": "--core-space-8",
  "10": "--core-space-10",
  "12": "--core-space-12",
};

const radiusVars: Dictionary = {
  none: "--core-radius-none",
  sm: "--core-radius-sm",
  md: "--core-radius-md",
  full: "--core-radius-full",
  // Semantic radius tokens - change these in semantics/radius.json to affect all products
  button: "--semantic-radius-button",
  chat: "--semantic-radius-chat",
  input: "--semantic-radius-input",
  message: "--semantic-radius-message",
};

const opacityVars: Dictionary = {
  default: "--primitives-opacity-default",
  subtle: "--primitives-opacity-subtle",
  disabled: "--primitives-opacity-disabled",
};

const preset: Config = {
  content: [],
  theme: {
    extend: {
      spacing: Object.fromEntries(
        Object.entries(spaceVars).map(([key, token]) => [key, toCssVar(token)]),
      ),
      borderRadius: Object.fromEntries(
        Object.entries(radiusVars).map(([key, token]) => [
          key,
          toCssVar(token),
        ]),
      ),
      opacity: Object.fromEntries(
        Object.entries(opacityVars).map(([key, token]) => [
          key,
          toCssVar(token),
        ]),
      ),
      colors: {
        button: {
          primary: toCssVar("--semantic-color-button-bg-primary"),
          primaryHover: toCssVar("--semantic-color-button-bg-primary-hover"),
          disabled: toCssVar("--semantic-color-button-bg-disabled"),
          border: toCssVar("--semantic-color-button-border-default"),
          text: {
            "on-primary": toCssVar("--semantic-color-button-text-on-primary"),
            disabled: toCssVar("--semantic-color-button-text-disabled"),
          },
        },
        chat: {
          header: toCssVar("--semantic-color-chat-bg-header"),
          body: toCssVar("--semantic-color-chat-bg-body"),
          footer: toCssVar("--semantic-color-chat-bg-footer"),
          input: toCssVar("--semantic-color-chat-bg-input"),
          message: toCssVar("--semantic-color-chat-bg-message"),
          border: toCssVar("--semantic-color-chat-border-default"),
          "border-input": toCssVar("--semantic-color-chat-border-input"),
          text: {
            default: toCssVar("--semantic-color-chat-text-default"),
            faint: toCssVar("--semantic-color-chat-text-faint"),
          },
        },
      },
      fontFamily: {
        button: [toCssVar("--semantic-typography-button-font-family")],
      },
      fontSize: {
        button: toCssVar("--semantic-typography-button-font-size"),
      },
      fontWeight: {
        button: toCssVar("--semantic-typography-button-font-weight"),
      },
      lineHeight: {
        button: toCssVar("--semantic-typography-button-line-height"),
      },
      minHeight: {
        control: toCssVar("--core-size-lg"),
        chat: "90vh",
      },
      boxShadow: {
        chat: toCssVar("--semantic-shadow-chat"),
      },
    },
  },
};

export default preset;
