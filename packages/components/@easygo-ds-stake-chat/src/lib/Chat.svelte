<script lang="ts">
  import clsx from "clsx";
  import type { HTMLAttributes } from "svelte/elements";

  export let className = "";
  let forwarded: HTMLAttributes<HTMLDivElement> = {};
  let userClass: string | null | undefined = "";
  $: ({ class: userClass, ...forwarded } =
    $$restProps as HTMLAttributes<HTMLDivElement>);
</script>

<div
  class={clsx(
    "flex flex-col rounded-chat border border-chat-border bg-chat-body shadow-chat overflow-hidden h-[95vh] w-full max-w-md",
    className,
    userClass,
  )}
  {...forwarded}
>
  <slot />
</div>
