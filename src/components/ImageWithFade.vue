<template>
  <div class="relative overflow-hidden rounded-2xl circular-mask-wrapper">
    <img
      :src="src"
      :alt="alt"
      class="block w-full h-auto object-cover select-none circular-mask-img"
      loading="lazy"
      draggable="false"
      :style="inlineVars"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string
  alt?: string
  /**
   * Start of fade from center (0–1); lower = more of image visible.
   */
  visibleCore?: number
  /**
   * How soft the fade edge is (0–1 segment length from start to full fade).
   * 0.15–0.25 typical.
   */
  fadePortion?: number
}
const props = withDefaults(defineProps<Props>(), {
  visibleCore: 0.78,
  fadePortion: 0.20
})

const endStop = Math.min(1, props.visibleCore + props.fadePortion)

const inlineVars = {
  '--core': props.visibleCore.toString(),
  '--mid1': (props.visibleCore + props.fadePortion * 0.40).toString(),
  '--mid2': (props.visibleCore + props.fadePortion * 0.70).toString(),
  '--end': endStop.toString()
}
</script>

<style scoped>
.circular-mask-wrapper {
  background: #fff; /* White "shadow" comes from showing background where mask fades out */
  position: relative;
}

.circular-mask-img {
  /*
    Mask goes from opaque (center) to transparent (edge).
    Transparent edge lets the parent's white show through = white halo.
  */
  -webkit-mask-image:
    radial-gradient(circle closest-side at 50% 50%,
      rgba(0,0,0,1) 0%,
      rgba(0,0,0,1) calc(var(--core) * 100%),
      rgba(0,0,0,0.75) calc(var(--mid1) * 100%),
      rgba(0,0,0,0.35) calc(var(--mid2) * 100%),
      rgba(0,0,0,0) calc(var(--end) * 100%));
  mask-image:
    radial-gradient(circle closest-side at 50% 50%,
      rgba(0,0,0,1) 0%,
      rgba(0,0,0,1) calc(var(--core) * 100%),
      rgba(0,0,0,0.75) calc(var(--mid1) * 100%),
      rgba(0,0,0,0.35) calc(var(--mid2) * 100%),
      rgba(0,0,0,0) calc(var(--end) * 100%));
  /* ensure smooth scaling if you ever animate */
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
</style>
