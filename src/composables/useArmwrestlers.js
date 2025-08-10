import { ref, computed } from 'vue';
// Dinamični base (vedno se konča z '/')
const base = import.meta.env.BASE_URL;
// Ne začenjaj z '/', ker base že vsebuje trailing slash
const dataUrl = `${base}data/armwrestlers.json`;
export function useArmwrestlers() {
    const armwrestlers = ref([]);
    const loading = ref(false);
    const error = ref(null);
    const selectedId = ref(1);
    async function load(force = false) {
        if (loading.value)
            return;
        if (armwrestlers.value.length && !force)
            return;
        loading.value = true;
        error.value = null;
        try {
            const url = `${dataUrl}?t=${Date.now()}`;
            const res = await fetch(url, { cache: 'no-store' });
            if (!res.ok)
                throw new Error(`Failed to load JSON: ${res.status}`);
            const json = await res.json();
            armwrestlers.value = json;
            if (!selectedId.value && armwrestlers.value.length) {
                selectedId.value = armwrestlers.value[0].id;
            }
        }
        catch (e) {
            error.value = e.message;
        }
        finally {
            loading.value = false;
        }
    }
    const selected = computed(() => armwrestlers.value.find(a => a.id === selectedId.value) || null);
    function select(id) {
        selectedId.value = id;
    }
    return { armwrestlers, loading, error, selected, selectedId, select, load };
}
