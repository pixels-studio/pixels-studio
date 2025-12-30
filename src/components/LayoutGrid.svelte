<script lang="ts">
  import { onMount } from "svelte";

  let visible = $state(false);

  onMount(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === "g") {
        e.preventDefault();
        visible = !visible;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
</script>

{#if visible}
  <div class="fixed inset-0 pointer-events-none z-100 px-4" aria-hidden="true">
    <div class="h-full grid grid-cols-12 gap-4">
      {#each Array(12) as _, i}
        <div class="bg-base-10/10"></div>
      {/each}
    </div>
  </div>
{/if}
