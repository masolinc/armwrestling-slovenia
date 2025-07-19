<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <aside 
  tabindex="-1"
  @keydown.esc="$emit('close')"
   :class="[
    'h-full flex flex-col bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-r border-neutral-200',
    'w-64 fixed md:static top-0 left-0 z-40 will-change-transform',
    mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
    'transition-transform duration-300 ease-out'
  ]">
    <div class="p-5 flex items-center gap-4 border-b border-neutral-200">
      <img src="/images/logo.jpg" alt="Logo"
          class="h-14 w-auto object-contain drop-shadow-sm" />
      <span class="font-semibold leading-snug text-neutral-800 text-sm md:text-base">
        Armwrestling Zveza Slovenije<br class="hidden sm:block" />
        <span class="font-light tracking-wide uppercase text-[11px] sm:text-xs text-neutral-500">tekmovalci</span>
      </span>
    </div>
    <div class="flex-1 overflow-y-auto">
      <ul class="py-2">
        <li v-for="p in armwrestlers" :key="p.id">
          <button @click="select(p.id)" :class="['w-full text-left px-4 py-2 text-sm hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none transition', p.id === selectedId ? 'font-medium bg-neutral-100' : 'text-neutral-700']">
            {{ p.fullName }}
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script setup lang="ts">
import type { Armwrestler } from '@/types/armwrestler'
interface Props { armwrestlers: Armwrestler[]; selectedId: string | null; mobileOpen: boolean }
interface Emits { (e:'select', id:string): void; (e:'close'): void }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<Props>()
const emit = defineEmits<Emits>()
function select(id: string) {
  emit('select', id)
  emit('close') 
}

</script>