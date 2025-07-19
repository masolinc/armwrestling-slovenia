<!-- LayoutShell.vue -->
<template>
  <div class="h-screen flex flex-col bg-white">
    <!-- Mobile Top Bar -->
    <div class="flex items-center gap-3 p-4 border-b border-neutral-200 md:hidden">
      <HamburgerButton @toggle="mobileOpen = !mobileOpen" />
      <img src="/images/logo.jpg" alt="Logo" class="h-10 w-auto" />
      <span class="text-xs font-medium leading-tight text-neutral-700">
        Armwrestling Zveza Slovenije<br />
        <span class="uppercase tracking-wide text-[10px] text-neutral-500">tekmovalci</span>
      </span>
    </div>

    <div class="flex flex-1 relative">
      <!-- Overlay for mobile -->
      <div
        v-if="mobileOpen"
        @click="mobileOpen = false"
        class="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden z-30"
      ></div>

      <Sidebar
        :armwrestlers="armwrestlers"
        :selected-id="selectedId"
        :mobile-open="mobileOpen"
        @select="select"
        @close="mobileOpen = false"
      />

      <main class="flex-1 ml-0 bg-white overflow-hidden relative">
        <!-- Cross-fade transition -->
        <Transition
          name="detail-fade"
          mode="out-in"
          appear
        >
          <ArmwrestlerDetail
            v-if="selected"
            :key="selectedId"
            :person="selected"
          />
          <div
            v-else
            key="placeholder"
            class="p-10 text-neutral-500"
          >Select an athlete…</div>
        </Transition>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import HamburgerButton from './HamburgerButton.vue'
import ArmwrestlerDetail from './ArmwrestlerDetail.vue'
import { useArmwrestlers } from '@/composables/useArmwrestlers'
import { onMounted, ref } from 'vue'

const { armwrestlers, selected, selectedId, select, load } = useArmwrestlers()
const mobileOpen = ref(false)

onMounted(() => {
  load()
})
</script>

<style scoped>
/* Fade + slight upward motion */
.detail-fade-enter-active,
.detail-fade-leave-active {
  transition:
    opacity 420ms cubic-bezier(.4,.15,.1,1),
    transform 420ms cubic-bezier(.4,.15,.1,1);
  will-change: opacity, transform;
  position: relative;
}

.detail-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.detail-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.detail-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.detail-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
