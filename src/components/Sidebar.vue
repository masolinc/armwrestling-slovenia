<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <aside :class="['h-full flex flex-col bg-white/70 backdrop-blur border-r border-neutral-200', mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0', 'transition-transform duration-300 w-64 fixed md:static z-40 top-0 left-0']">
    <div class="p-4 flex items-center gap-3 border-b border-neutral-200">
      <img src="/images/logo.jpg" alt="Logo" class="h-10 w-auto object-contain" />
      <span class="font-semibold tracking-wide text-sm uppercase text-ink">Armwrestlers</span>
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
interface Emits { (e:'select', id:string): void }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<Props>()
const emit = defineEmits<Emits>()
function select(id: string) { emit('select', id) }
</script>