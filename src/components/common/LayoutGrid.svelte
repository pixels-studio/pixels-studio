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
  <div
    class="fixed inset-0 grid grid-cols-10 gap-4 pointer-events-none z-100 px-5"
    aria-hidden="true"
  >
    {#each Array(10) as _, i}
      <div class="bg-base-10/10 h-full"></div>
    {/each}
  </div>
{/if}
