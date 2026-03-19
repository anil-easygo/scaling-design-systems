<script>import clsx from "clsx";
export let className = "";
let forwarded = {};
let userClass = "";
$:
  ({ class: userClass, ...forwarded } = $$restProps);
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
