<template>
  <div v-if="person" class="p-6 md:p-10 h-full overflow-y-auto">
    <div class="grid md:grid-cols-2 gap-10 items-start">
      <div>
        <ImageWithFade v-if="imageUrl" :src="imageUrl" :alt="person.fullName" />
      </div>
      <div class="space-y-6">
        <header><h1 class="text-3xl font-light tracking-tight">{{ person.fullName }}</h1></header>
        <ul class="space-y-2 text-sm leading-relaxed">
          <li v-if="person.age"><strong class="font-medium">Age:</strong> {{ person.age }}</li>
          <li v-if="person.city"><strong class="font-medium">City:</strong> {{ person.city }}</li>
          <li v-if="person.club"><strong class="font-medium">Club:</strong> {{ person.club }}</li>
          <li v-if="person.weightClass"><strong class="font-medium">Weight Class:</strong> {{ person.weightClass }}</li>
          <li v-if="person.contact?.phone"><strong class="font-medium">Phone:</strong> <a class="underline" :href="`tel:${person.contact.phone}`">{{ person.contact.phone }}</a></li>
          <li v-if="person.contact?.instagram"><strong class="font-medium">Instagram:</strong> <a class="underline" :href="`https://instagram.com/${person.contact.instagram}`" target="_blank" rel="noopener">{{ person.contact.instagram }}</a></li>
          <li v-if="person.contact?.facebook"><strong class="font-medium">Facebook:</strong> {{ person.contact.facebook }}</li>
          <li v-if="person.contact?.email"><strong class="font-medium">Email:</strong> <a class="underline" :href="`mailto:${person.contact.email}`">{{ person.contact.email }}</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else class="p-10 text-neutral-500">Select an athlete…</div>
</template>
<script setup lang="ts">
import type { Armwrestler } from '@/types/armwrestler'
import ImageWithFade from './ImageWithFade.vue'
import { computed } from 'vue'
interface Props { person: Armwrestler | null }
const props = defineProps<Props>()
const imageUrl = computed(() => props.person?.image ? `/images/${props.person.image}` : null)
</script>