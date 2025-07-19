<template>
  <div class="h-screen flex flex-col bg-white">
    <div class="flex items-center gap-3 p-3 border-b border-neutral-200 md:hidden">
      <HamburgerButton @toggle="mobileOpen = !mobileOpen" />
      <img src="/images/logo.jpg" alt="Logo" class="h-8 w-auto" />
      <span class="text-sm tracking-wide uppercase text-neutral-700">Armwrestlers</span>
    </div>
    <div class="flex flex-1 relative">
      <Sidebar :armwrestlers="armwrestlers" :selected-id="selectedId" :mobile-open="mobileOpen" @select="select" />
      <main class="flex-1 ml-0 md:ml-64 bg-white">
        <ArmwrestlerDetail :person="selected" />
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import HamburgerButton from './HamburgerButton.vue'
import ArmwrestlerDetail from './ArmwrestlerDetail.vue'
import { useArmwrestlers } from '../composables/useArmwrestlers'
import { onMounted, ref } from 'vue'
const { armwrestlers, selected, selectedId, select, load } = useArmwrestlers()
const mobileOpen = ref(false)
onMounted(() => { load() })
</script>