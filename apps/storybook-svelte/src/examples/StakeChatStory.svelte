<script lang="ts">
  import {
    Chat,
    ChatHeader,
    ChatBody,
    ChatFooter,
  } from "@easygo-ds-stake-chat";
  import { Button } from "@easygo-ds-stake-button";

  const mockMessages = [
    {
      id: 1,
      username: "stake_support",
      message: "Welcome! How can we help you today?",
    },
    {
      id: 2,
      username: "user_visitor",
      message: "I have a question about my account",
    },
    {
      id: 3,
      username: "stake_support",
      message: "Sure, I'm happy to help. What would you like to know?",
    },
  ];
</script>

<div class="flex h-screen items-center justify-center p-4">
  <Chat>
    <ChatHeader>
      <div class="flex items-center justify-between py-4">
        <div class="flex items-center gap-2">
          <select
            class="rounded bg-chat-input border border-chat-border-input px-2 py-1 text-xs text-chat-text-default"
          >
            <option>🇺🇸 English</option>
            <option>🇪🇸 Spanish</option>
            <option>🇧🇷 Portuguese</option>
          </select>
        </div>
        <div class="flex items-center gap-2">
          <button
            class="p-1.5 rounded hover:bg-white/10 text-chat-text-faint transition-colors"
            aria-label="Settings"
          >
            <svg
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              /><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              /></svg
            >
          </button>
          <button
            class="p-1.5 rounded hover:bg-white/10 text-chat-text-faint transition-colors"
            aria-label="Close"
          >
            <svg
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              /></svg
            >
          </button>
        </div>
      </div>
    </ChatHeader>
    <ChatBody class="flex flex-col gap-3">
      {#each mockMessages as msg}
        <div class="rounded-lg bg-chat-message px-3 py-2">
          <span class="text-xs font-medium text-button-primary"
            >{msg.username}</span
          >
          <p class="text-sm text-chat-text-default">{msg.message}</p>
        </div>
      {/each}
    </ChatBody>
    <ChatFooter>
      <div class="flex flex-col gap-3 my-4">
        <input
          class="w-full rounded-md border border-chat-border-input bg-chat-input px-3 py-2 text-sm text-chat-text-default placeholder:text-chat-text-faint"
          placeholder="Type a message..."
        />
        <div class="flex items-center justify-between">
          <span class="flex items-center gap-1.5 text-xs text-chat-text-faint">
            <span
              class="inline-flex h-2 w-2 rounded-full bg-emerald-500"
              aria-hidden="true"
            ></span>
            Online: 39,287
          </span>
          <Button size="sm">Send</Button>
        </div>
      </div>
    </ChatFooter>
  </Chat>
</div>
