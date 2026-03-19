<script>import clsx from "clsx";
export let className = "";
let forwarded = {};
let userClass = "";
$:
  ({ class: userClass, ...forwarded } = $$restProps);
</script>

<div
  class={clsx(
    "bg-chat-header px-4 py-4 text-sm font-semibold text-chat-text-default border-b-2 border-chat-border shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2),0_4px_6px_-2px_rgba(0,0,0,0.1)] z-10 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent",
    className,
    userClass,
  )}
  {...forwarded}
>
  <slot />
</div>
