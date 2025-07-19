<template>
  <figure class="relative isolate fade-wrapper rounded-2xl overflow-hidden bg-white">
    <img
      :src="src"
      :alt="alt"
      class="w-full h-auto object-cover select-none fade-mask"
      loading="lazy"
      draggable="false"
    />
  </figure>
</template>

<script setup lang="ts">
interface Props {
  src: string
  alt?: string
}
defineProps<Props>()
</script>

<style scoped>
.fade-mask {
  -webkit-mask-image: radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%);
  mask-image: radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%);
  transition: transform .6s ease;
}

.fade-wrapper::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(to right,
      rgba(255,255,255,0.95) 0%,
      rgba(255,255,255,0) 18%,
      rgba(255,255,255,0) 82%,
      rgba(255,255,255,0.95) 100%),
    linear-gradient(to bottom,
      rgba(255,255,255,0.85) 0%,
      rgba(255,255,255,0) 14%,
      rgba(255,255,255,0) 86%,
      rgba(255,255,255,0.9) 100%);
  mix-blend-mode: normal;
}

@media (hover:hover) {
  .fade-wrapper:hover .fade-mask {
    transform: scale(1.03);
  }
}
</style>
