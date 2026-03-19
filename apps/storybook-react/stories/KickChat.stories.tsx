import type { Meta, StoryObj } from "@storybook/react";
import { Chat } from "@easygo-ds-kick-chat";
import { Button } from "@easygo-ds-kick-button";

const meta: Meta<typeof Chat> = {
  title: "Kick/Chat",
  component: Chat,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#0a0a0a" }]
    },
    docs: {
      description: {
        component: "Composable chat container with `Chat.Header`, `Chat.Body`, and `Chat.Footer` children."
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Chat>;

const mockMessages = [
  { id: 1, username: "ninja_streamer", message: "Welcome to the stream! 🎮" },
  { id: 2, username: "viewer123", message: "Let's gooo!" },
  { id: 3, username: "pro_gamer", message: "First time here, this chat looks sick" },
  { id: 4, username: "kick_user", message: "The green theme is fire 🔥" },
];

export const Default: Story = {
  render: () => (
    <div className="flex h-screen items-center justify-center p-4">
      <Chat>
        <Chat.Header>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-2 w-2 rounded-full bg-button-primary" aria-hidden="true" />
              <span className="text-sm font-semibold">Live Chat</span>
            </div>
            <span className="text-xs text-chat-text-faint">1.2k viewers</span>
          </div>
        </Chat.Header>
        <Chat.Body className="flex flex-col gap-3">
          {mockMessages.map((msg) => (
            <div
              key={msg.id}
              className="rounded-lg bg-chat-message px-3 py-2"
            >
              <span className="text-xs font-medium text-button-primary">{msg.username}</span>
              <p className="text-sm text-chat-text-default">{msg.message}</p>
            </div>
          ))}
        </Chat.Body>
        <Chat.Footer>
          <div className="flex flex-col gap-2 my-4">
            <span className="flex items-center gap-1.5 text-xs text-chat-text-faint">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              Followers only
            </span>
            <div className="flex items-center gap-3">
              <input
                className="flex-1 rounded-md border border-chat-border-input bg-chat-input px-3 py-2 text-sm text-chat-text-default placeholder:text-chat-text-faint"
                placeholder="Send a message..."
              />
              <Button size="sm">Chat</Button>
            </div>
          </div>
        </Chat.Footer>
      </Chat>
    </div>
  )
};
