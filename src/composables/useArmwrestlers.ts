import { ref, computed } from 'vue'
import type { Armwrestler } from '@/types/armwrestler'

const base = import.meta.env.BASE_URL
const dataUrl = `${base}data/armwrestlers.json`

export function useArmwrestlers() {
  const armwrestlers = ref<Armwrestler[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function load(force = false) {
    if (loading.value) return
    if (armwrestlers.value.length && !force) return
    loading.value = true
    error.value = null
    try {
      const url = `${dataUrl}?t=${Date.now()}`
      const res = await fetch(url, { cache: 'no-store' })
      if (!res.ok) throw new Error(`Failed to load JSON: ${res.status}`)
      armwrestlers.value = await res.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      error.value = e?.message ?? 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  const regions = computed(() => {
    const set = new Set<string>()
    for (const a of armwrestlers.value) if (a.region) set.add(a.region)
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'sl'))
  })

  return { armwrestlers, loading, error, load, regions }
}
