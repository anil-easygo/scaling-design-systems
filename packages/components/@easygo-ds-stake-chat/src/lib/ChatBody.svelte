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
    "flex-1 overflow-y-auto px-4 py-4 text-chat-text-default bg-chat-body",
    className,
    userClass,
  )}
  {...forwarded}
>
  <slot />
</div>
