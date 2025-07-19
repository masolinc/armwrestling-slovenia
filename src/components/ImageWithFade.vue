<template>
  <div class="relative overflow-hidden rounded-xl bg-white">
    <img :src="src" :alt="alt" class="w-full h-auto object-cover fade-edge" loading="lazy" />
  </div>
</template>
<script setup lang="ts">
interface Props { src: string; alt?: string }
defineProps<Props>()
</script>
<style scoped>
.fade-edge {
  -webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
  filter: drop-shadow(0 4px 12px rgba(0,0,0,.08));
}
</style>