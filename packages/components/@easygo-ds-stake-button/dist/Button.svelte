<script>import clsx from "clsx";
export let variant = "primary";
export let size = "md";
export let loading = false;
export let disabled = false;
export let fullWidth = false;
export let type = "button";
let forwarded = {};
let userClass = "";
$:
  ({ class: userClass, ...forwarded } = $$restProps);
const variantClasses = {
  primary: "bg-button-primary text-button-text-on-primary border-button-border hover:bg-button-primaryHover"
};
const sizeClasses = {
  sm: "px-3 py-1.5 text-[0.95em]",
  md: "px-4 py-2"
};
const baseClasses = "inline-flex min-h-control items-center justify-center gap-2 border rounded-button font-button text-button leading-button transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-button-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-disabled";
$:
  isDisabled = disabled || loading;
$:
  classes = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    userClass
  );
</script>

<button
  class={classes}
  {type}
  disabled={isDisabled}
  aria-busy={loading || undefined}
  data-variant={variant}
  data-size={size}
  {...forwarded}
>
  {#if loading}
    <span
      class="h-4 w-4 animate-spin rounded-full border-2 border-black/70 border-r-transparent"
      aria-hidden="true"
    />
  {/if}
  <span
    class="flex items-center text-button-text-on-primary justify-center gap-2"
    ><slot /></span
  >
</button>
