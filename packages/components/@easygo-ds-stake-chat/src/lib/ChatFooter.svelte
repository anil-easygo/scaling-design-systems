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
    "bg-chat-footer px-4 py-4 text-chat-text-default text-sm border-t-2 border-chat-border shadow-[0_-8px_16px_-4px_rgba(0,0,0,0.3)] z-10 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
    className,
    userClass,
  )}
  {...forwarded}
>
  <slot />
</div>
