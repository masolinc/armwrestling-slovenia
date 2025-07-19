<!-- ImageWithFade.vue -->
<template>
  <figure
    class="relative overflow-hidden select-none bg-white group"
    :class="variantClass"
    :style="styleVars"
  >
    <img
      :src="src"
      :alt="alt"
      loading="lazy"
      draggable="false"
      class="block w-full h-auto object-cover transition-transform duration-700 ease-out will-change-transform"
      :class="zoomClass"
    />

    <!-- Keep existing white halo overlay (remove if not needed) -->
    <div class="fade-overlay pointer-events-none absolute inset-0"></div>
  </figure>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'halo-mid' | 'halo-soft' | 'halo-strong'

interface Props {
  src: string
  alt?: string
  variant?: Variant
  fadeWidthPx?: number
  edgeStrength?: number
  falloffFactor?: number
  /** Scale factor on hover/focus */
  hoverScale?: number
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'halo-mid',
  fadeWidthPx: 60,
  edgeStrength: 0.95,
  falloffFactor: 0.55,
  hoverScale: 1.06
})

const styleVars = computed(() => ({
  '--fade-width': props.fadeWidthPx + 'px',
  '--edge-alpha': String(props.edgeStrength),
  '--falloff': String(props.falloffFactor),
  '--hover-scale': String(props.hoverScale)
}))

const variantClass = computed(() => {
  switch (props.variant) {
    case 'halo-soft': return 'variant-soft'
    case 'halo-strong': return 'variant-strong'
    default: return 'variant-mid'
  }
})

const zoomClass = computed(
  () => `group-hover:scale-[var(--hover-scale)] group-focus-visible:scale-[var(--hover-scale)]`
)
</script>

<style scoped>
figure {
  position: relative;
  outline: none;
}

/* Zoom handled by utility classes; fallback (if dynamic class not applied) */
figure:hover img,
figure:focus-visible img {
  transform: scale(var(--hover-scale, 1.06));
}

/* White halo overlay (same as your earlier version) */
.fade-overlay {
  border-radius: inherit;
  background:
    radial-gradient(circle at 0 0,
      rgba(255,255,255,var(--edge-alpha)) 0%,
      rgba(255,255,255, calc(var(--edge-alpha)*0.75)) calc(var(--fade-width)*0.35),
      rgba(255,255,255,0) calc(var(--fade-width))) top left / 50% 50% no-repeat,
    radial-gradient(circle at 100% 0,
      rgba(255,255,255,var(--edge-alpha)) 0%,
      rgba(255,255,255, calc(var(--edge-alpha)*0.75)) calc(var(--fade-width)*0.35),
      rgba(255,255,255,0) calc(var(--fade-width))) top right / 50% 50% no-repeat,
    radial-gradient(circle at 100% 100%,
      rgba(255,255,255,var(--edge-alpha)) 0%,
      rgba(255,255,255, calc(var(--edge-alpha)*0.75)) calc(var(--fade-width)*0.35),
      rgba(255,255,255,0) calc(var(--fade-width))) bottom right / 50% 50% no-repeat,
    radial-gradient(circle at 0 100%,
      rgba(255,255,255,var(--edge-alpha)) 0%,
      rgba(255,255,255, calc(var(--edge-alpha)*0.75)) calc(var(--fade-width)*0.35),
      rgba(255,255,255,0) calc(var(--fade-width))) bottom left / 50% 50% no-repeat,
    linear-gradient(to right,
      rgba(255,255,255,var(--edge-alpha)) 0%,
      rgba(255,255,255,0) calc(var(--fade-width)*1.05),
      rgba(255,255,255,0) calc(100% - var(--fade-width)*1.05),
      rgba(255,255,255,var(--edge-alpha)) 100%),
    linear-gradient(to bottom,
      rgba(255,255,255,var(--edge-alpha)) 0%,
      rgba(255,255,255,0) calc(var(--fade-width)*1.05),
      rgba(255,255,255,0) calc(100% - var(--fade-width)*1.05),
      rgba(255,255,255,var(--edge-alpha)) 100%);
  pointer-events: none;
}

/* Variant tweaks */
.variant-soft .fade-overlay {
  --edge-alpha: calc(var(--edge-alpha)*0.65);
  --fade-width: calc(var(--fade-width)*1.4);
}
.variant-strong .fade-overlay {
  --edge-alpha: calc(min(1, var(--edge-alpha)*1.2));
  --fade-width: calc(var(--fade-width)*0.75);
}

/* Image performance hints */
figure img {
  will-change: transform;
  transform-origin: 50% 50%;
  backface-visibility: hidden;
}
</style>
