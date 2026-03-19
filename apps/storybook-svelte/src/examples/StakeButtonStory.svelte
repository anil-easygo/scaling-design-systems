<script lang="ts">
  import { Button } from "@easygo-ds-stake-button";
  import type { ButtonSize, ButtonVariant } from "@easygo-ds-stake-button";

  export let variant: ButtonVariant = "primary";
  export let size: ButtonSize = "md";
  export let disabled = false;
  export let fullWidth = false;
  export let loading = false;
  export let label = "Primary action";
</script>

<Button {variant} {size} {disabled} {fullWidth} {loading}>
  {label}
</Button>
