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
    ]"
  >
    <!-- Header -->
    <div class="p-5 flex items-center gap-4 border-b border-neutral-200">
      <img src="/images/logo.jpg" alt="Logo"
           class="h-14 w-auto object-contain drop-shadow-sm" />
      <span class="font-semibold leading-snug text-neutral-800 text-sm md:text-base">
        Armwrestling Zveza Slovenije<br class="hidden sm:block" />
      </span>
    </div>

    <!-- Nav -->
    <nav class="flex-1 overflow-y-auto">
      <ul class="py-2">
        <!-- Home -->
        <li>
          <button
            @click="goHome"
            :class="[
              'w-full text-left px-4 py-2 text-sm hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none transition',
              isHome ? 'font-medium bg-neutral-100' : 'text-neutral-700'
            ]"
          >
            🏠 Domov
          </button>
        </li>

        <!-- Competitors by Region -->
        <li class="mt-2">
          <div class="px-4 py-2 text-xs uppercase tracking-wide text-neutral-500">
            Tekmovalci
          </div>
          <div class="px-4 py-1 text-[11px] uppercase tracking-wide text-neutral-400">
            Regije
          </div>
          <ul>
            <li v-for="r in regionsList" :key="r">
              <button
                @click="selectRegion(r)"
                :class="[
                  'w-full text-left px-4 py-2 text-sm hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none transition',
                  r === currentRegion ? 'font-medium bg-neutral-100' : 'text-neutral-700'
                ]"
              >
                {{ r }}
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { computed, withDefaults, defineProps, defineEmits } from 'vue'
import type { Armwrestler } from '@/types/armwrestler'

interface Props {
  armwrestlers: Armwrestler[];
  currentRegion: string | null;
  mobileOpen: boolean;
}
interface Emits {
  (e: 'close'): void;
  (e: 'go-home'): void;
  (e: 'select-region', region: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  currentRegion: null,
})
const emit = defineEmits<Emits>()

const regionsList = computed(() => {
  const set = new Set<string>()
  for (const a of props.armwrestlers) if (a.region) set.add(a.region)
  return Array.from(set).sort((a, b) => a.localeCompare(b, 'sl'))
})

const isHome = computed(() => props.currentRegion === null)

function goHome() {
  emit('go-home')
  emit('close')
}

function selectRegion(region: string) {
  emit('select-region', region)
  emit('close')
}
</script>
