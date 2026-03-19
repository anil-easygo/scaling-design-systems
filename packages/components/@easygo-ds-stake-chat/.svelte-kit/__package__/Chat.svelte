<script>import clsx from "clsx";
export let className = "";
let forwarded = {};
let userClass = "";
$:
  ({ class: userClass, ...forwarded } = $$restProps);
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
