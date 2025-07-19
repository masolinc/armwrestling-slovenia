<template>
  <div v-if="person" class="h-full overflow-y-auto">
    <div class="px-6 md:px-12 py-10">
      <div class="flex flex-col lg:flex-row gap-12 items-start">
        <!-- LEFT IMAGE COLUMN -->
        <div
          class="w-full lg:w-auto basis-[360px] md:basis-[400px] lg:basis-[420px] xl:basis-[480px] shrink-0"
        >
          <ImageWithFade
            v-if="imageUrl"
            :src="imageUrl"
            :alt="person.fullName"
          />
        </div>

        <!-- RIGHT DETAILS COLUMN -->
        <div class="flex-1 min-w-0 w-full">
          <header class="mb-8">
            <h1
              class="font-light tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900"
            >
              {{ person.fullName }}
            </h1>
            <p v-if="person.club" class="mt-3 text-neutral-500 text-sm md:text-base">
              {{ person.club }}
            </p>
          </header>

            <ul class="space-y-3 text-base leading-relaxed">
              <li v-if="person.age"><span class="font-semibold">Age:</span> {{ person.age }}</li>
              <li v-if="person.city"><span class="font-semibold">City:</span> {{ person.city }}</li>
              <li v-if="person.weightClass"><span class="font-semibold">Weight Class:</span> {{ person.weightClass }}</li>

              <li v-if="person.contact?.phone">
                <span class="font-semibold">Phone:</span>
                <a class="underline" :href="`tel:${person.contact.phone}`">{{ person.contact.phone }}</a>
              </li>
              <li v-if="person.contact?.instagram">
                <span class="font-semibold">Instagram:</span>
                <a
                  class="underline"
                  :href="`https://instagram.com/${person.contact.instagram}`"
                  target="_blank"
                  rel="noopener"
                >
                  {{ person.contact.instagram }}
                </a>
              </li>
              <li v-if="person.contact?.facebook">
                <span class="font-semibold">Facebook:</span> {{ person.contact.facebook }}
              </li>
              <li v-if="person.contact?.email">
                <span class="font-semibold">Email:</span>
                <a class="underline" :href="`mailto:${person.contact.email}`">{{ person.contact.email }}</a>
              </li>
            </ul>
        </div>
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
const imageUrl = computed(() =>
  props.person?.image ? `/images/${props.person.image}` : null
)
</script>
