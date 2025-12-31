<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";

  let visible = $state(false);
  let mounted = $state(false);
  let gridContainer: HTMLDivElement | undefined;
  let bars: (HTMLDivElement | undefined)[] = [];

  $effect(() => {
    if (!mounted || bars.length === 0 || bars.some((bar) => !bar)) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const validBars = bars.filter((bar): bar is HTMLDivElement => !!bar);

    if (prefersReducedMotion) {
      // No animation for users who prefer reduced motion
      gsap.set(validBars, {
        scaleY: visible ? 1 : 0,
        opacity: visible ? 1 : 0,
      });
      return;
    }

    if (visible) {
      // Animate in: stagger from left to right
      gsap.fromTo(
        validBars,
        {
          scaleY: 0,
          opacity: 0,
        },
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: "power2.out",
        }
      );
    } else {
      // Animate out: stagger from right to left
      gsap.to(validBars, {
        scaleY: 0,
        opacity: 0,
        duration: 0.3,
        stagger: {
          each: 0.02,
          from: "end",
        },
        ease: "power2.in",
      });
    }
  });

  onMount(() => {
    mounted = true;

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

<div
  bind:this={gridContainer}
  class="fixed inset-0 grid grid-cols-10 gap-4 pointer-events-none z-100 px-5"
  class:hidden={!mounted}
  aria-hidden="true"
>
  {#each Array(10) as _, i}
    <div
      bind:this={bars[i]}
      class="bg-orange-500/10 h-full origin-bottom"
      style="transform: scaleY(0); opacity: 0;"
    ></div>
  {/each}
</div>
