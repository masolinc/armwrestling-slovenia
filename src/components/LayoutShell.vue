<template>
  <div class="h-screen flex flex-col bg-white">
    <!-- Mobile Top Bar -->
    <div class="flex items-center gap-3 p-4 border-b border-neutral-200 md:hidden">
      <HamburgerButton @toggle="mobileOpen = !mobileOpen" />
      <img src="/images/logo.jpg" alt="Logo" class="h-10 w-auto" />
      <span class="text-xs font-medium leading-tight text-neutral-700">
        Armwrestling zveza Slovenije<br />
        <span class="uppercase tracking-wide text-[10px] text-neutral-500">
          {{ currentView === 'home' ? 'domov' : ('tekmovalci · ' + (currentRegion ?? '')) }}
        </span>
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
        :armwrestlers="armwrestlersList"
        :current-region="currentRegion"
        :mobile-open="mobileOpen"
        @close="mobileOpen = false"
        @go-home="onGoHome"
        @select-region="onSelectRegion"
      />

      <main class="flex-1 ml-0 bg-white overflow-hidden relative">
        <Transition name="detail-fade" mode="out-in" appear>
          <!-- HOME VIEW -->
          <section
            v-if="currentView === 'home'"
            key="home"
            class="max-w-4xl mx-auto p-8 sm:p-12 text-neutral-800 leading-relaxed"
          >
            <h1 class="text-3xl sm:text-4xl font-light tracking-tight text-neutral-900">
              Dobrodošli na spletni strani Armwrestling zveze Slovenije
            </h1>
            <p class="mt-6">
              Namen strani je povezati slovensko armwrestlersko skupnost in pomagati
              pri iskanju <strong>krajev za trening</strong>. Na enem mestu
              predstavljamo tekmovalce, klube in kontakte, da bo vstop v šport
              in napredek lažji.
            </p>
            <ul class="mt-6 list-disc pl-6 space-y-2">
              <li>Razišči tekmovalce po <strong>regijah</strong>.</li>
              <li>Najdi kontakt in se pridruži lokalni <strong>trening skupini</strong>.</li>
              <li>Ostani v stiku z dogajanjem v slovenskem armwrestlingu.</li>
            </ul>
            <!-- Gumb 'Začni z regijami' je odstranjen -->
          </section>

          <!-- DETAIL VIEW -->
          <section
            v-else
            :key="currentRegion || 'detail'"
            class="h-full flex flex-col"
          >
            <div class="border-b border-neutral-200 px-4 sm:px-6 py-3">
              <div class="flex items-center gap-3 flex-wrap">
                <h2 class="text-sm font-medium text-neutral-700 m-0">
                  Regija:
                  <span class="px-2 py-1 rounded-full bg-neutral-100 text-neutral-700">{{ currentRegion }}</span>
                </h2>
              </div>

              <div class="mt-3 flex items-center gap-2 flex-wrap">
                <template v-if="currentRegion && !loading && filteredArmwrestlers.length">
                  <button
                    v-for="p in filteredArmwrestlers"
                    :key="p.id"
                    @click="select(p.id)"
                    :class="[
                      'px-3 py-1.5 rounded-md border text-sm transition',
                      p.id === selectedId ? 'bg-neutral-900 text-white border-neutral-900' : 'hover:bg-neutral-50 border-neutral-200 text-neutral-800'
                    ]"
                  >
                    {{ p.fullName }}
                  </button>
                </template>
                <template v-else-if="currentRegion && !loading">
                  <span class="text-neutral-500 text-sm">V tej regiji še ni tekmovalcev.</span>
                </template>
              </div>
            </div>

            <div class="flex-1">
              <ArmwrestlerDetail
                v-if="selected"
                :key="selectedId || 0"
                :person="selected"
              />
              <div v-else class="p-10 text-neutral-500">
                <template v-if="currentRegion">
                  Izberi tekmovalca v regiji <strong>{{ currentRegion }}</strong>.
                </template>
                <template v-else>
                  Izberi regijo v levem meniju.
                </template>
              </div>
            </div>
          </section>
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
import { onMounted, ref, computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Data-only store
const { armwrestlers, loading, load } = useArmwrestlers()
const armwrestlersList = computed(() => armwrestlers.value)

// Router-driven view state
const currentRegion = computed<string | null>(() => {
  const r = route.params.region
  return typeof r === 'string' ? r : null
})
const currentView = computed<'home' | 'detail'>(() =>
  route.name === 'home' ? 'home' : 'detail'
)

// Local selection
const selectedId = ref<number>(0)
const filteredArmwrestlers = computed(() =>
  currentRegion.value
    ? armwrestlers.value.filter(
        a => a.region?.toLowerCase() === currentRegion.value!.toLowerCase()
      )
    : []
)
const selected = computed(() =>
  filteredArmwrestlers.value.find(a => a.id === selectedId.value) || null
)
function select(id: number) {
  selectedId.value = id
}

const mobileOpen = ref(false)
onMounted(load)

// Auto-preselect: ko je izbrana regija in so podatki naloženi, avtomatsko izberi prvega
watchEffect(() => {
  if (currentView.value === 'detail') {
    const first = filteredArmwrestlers.value[0]
    selectedId.value = first ? first.id : 0
  } else {
    selectedId.value = 0
  }
})

// Handlers => zgolj router navigacija
function onGoHome() {
  router.push({ name: 'home' })
}

function onSelectRegion(region: string) {
  router.push({ name: 'region', params: { region } })
}
</script>

<style scoped>
.detail-fade-enter-active,
.detail-fade-leave-active {
  transition:
    opacity 420ms cubic-bezier(.4,.15,.1,1),
    transform 420ms cubic-bezier(.4,.15,.1,1);
  will-change: opacity, transform;
  position: relative;
}
.detail-fade-enter-from { opacity: 0; transform: translateY(12px); }
.detail-fade-enter-to   { opacity: 1; transform: translateY(0); }
.detail-fade-leave-from { opacity: 1; transform: translateY(0); }
.detail-fade-leave-to   { opacity: 0; transform: translateY(-10px); }
</style>
