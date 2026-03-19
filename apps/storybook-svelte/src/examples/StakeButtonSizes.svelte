<script lang="ts">
  import { Button } from "@easygo-ds-stake-button";

  export let disabled = false;
  export let loading = false;
  export let fullWidth = false;
</script>

<div class="flex flex-col gap-4">
  <Button size="sm" {disabled} {loading} {fullWidth}>
    Small
  </Button>
  <Button size="md" {disabled} {loading} {fullWidth}>
    Medium
  </Button>
</div>
