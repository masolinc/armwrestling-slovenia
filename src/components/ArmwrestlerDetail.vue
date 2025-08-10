<!-- PersonDetail.vue -->
<template>
  <div v-if="person" class="min-h-full flex">
    <div class="flex flex-col justify-center w-full px-6 py-6">
      <div
        class="flex flex-col lg:flex-row gap-12 items-center lg:items-start lg:justify-center max-w-7xl mx-auto"
      >
        <!-- IMAGE COLUMN -->
        <div
          class="w-full lg:self-center lg:w-auto basis-[360px] md:basis-[400px] lg:basis-[420px] xl:basis-[480px] shrink-0"
        >
          <ImageWithFade
            v-if="imageUrl"
            :src="imageUrl"
            :alt="person.fullName"
            variant="halo-mid"
            :fade-width-px="50"
            :edge-strength="0.95"
            :hover-scale="1.07"
          />
        </div>

        <!-- DETAILS COLUMN -->
        <div class="flex-1 min-w-0 w-full lg:self-center">
          <header class="mb-8 text-center lg:text-left">
            <h1
              class="font-light tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 transition-colors"
            >
              {{ person.fullName }}
            </h1>
            <p
              v-if="person.club"
              class="mt-3 text-neutral-500 text-sm md:text-base"
            >
              {{ person.club }}
            </p>
          </header>

          <ul class="space-y-3 text-base leading-relaxed text-neutral-800">
            <li v-if="person.birthYear">
              <span class="font-semibold">Rojstno leto:</span> {{ person.birthYear }}
            </li>
            <li v-if="person.city">
              <span class="font-semibold">Kraj:</span> {{ person.city }}
            </li>
            <li v-if="person.heightCm">
              <span class="font-semibold">Višina:</span> {{ person.heightCm }} cm
            </li>
            <li v-if="person.weightKg">
              <span class="font-semibold">Teža:</span> {{ person.weightKg }} kg
            </li>
            <li v-else-if="person.weightKgRange">
              <span class="font-semibold">Teža:</span> {{ person.weightKgRange }} kg
            </li>
            <li v-if="person.weightClass">
              <span class="font-semibold">Kategorija:</span> {{ person.weightClass }}
            </li>

            <li v-if="person.contact?.phone">
              <span class="font-semibold">Telefon: </span>
              <a
                class="underline hover:text-neutral-700"
                :href="`tel:${person.contact.phone}`"
              >{{ person.contact.phone }}</a>
            </li>
            <li v-if="person.contact?.instagram">
              <span class="font-semibold">Instagram: </span>
              <a
                class="underline hover:text-neutral-700"
                :href="`https://instagram.com/${person.contact.instagram}`"
                target="_blank"
                rel="noopener"
              >{{ person.contact.instagram }}</a>
            </li>
            <li v-if="person.contact?.facebook">
              <span class="font-semibold">Facebook: </span>
              {{ person.contact.facebook }}
            </li>
            <li v-if="person.contact?.email">
              <span class="font-semibold">Email: </span>
              <a
                class="underline break-all hover:text-neutral-700"
                :href="`mailto:${person.contact.email}`"
              >{{ person.contact.email }}</a>
            </li>
            <li v-if="person.contact?.address">
              <span class="font-semibold">Naslov: </span>
              {{ person.contact.address }}
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

const base = import.meta.env.BASE_URL

const imageUrl = computed(() =>
  props.person?.image ? `${base}images/${props.person.image}` : null
)
</script>
