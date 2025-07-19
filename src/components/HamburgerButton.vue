<template>
  <button @click="$emit('toggle')" class="p-2 inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-700 shadow-sm md:hidden focus:outline-none focus:ring-2 focus:ring-neutral-400">
    <span class="sr-only">Toggle menu</span>
    <div class="space-y-1">
      <span class="block h-0.5 w-5 bg-neutral-800"></span>
      <span class="block h-0.5 w-5 bg-neutral-800"></span>
      <span class="block h-0.5 w-5 bg-neutral-800"></span>
    </div>
  </button>
</template>