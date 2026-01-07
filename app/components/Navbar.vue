<template>
  <header class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b">
    <nav class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

      <!-- Logo / Brand -->
      <NuxtLink to="/" class="flex items-center gap-2 font-bold text-lg text-[#145DA0]">
        📘 GiggleLearn
      </NuxtLink>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
        <li><NuxtLink to="/" @click="close">Home</NuxtLink></li>
        <li><NuxtLink to="/about" @click="close">About us</NuxtLink></li>
        <li><NuxtLink to="/learning" @click="close">Learning Programs</NuxtLink></li>
        <li><NuxtLink to="/contact" @click="close">Contact</NuxtLink></li>
      </ul>

      <!-- Language Selector + Enroll CTA -->
      <div class="hidden md:flex items-center gap-3">
        <!-- Language Scrollable Dropdown -->
        <select v-model="$i18n.locale" class="rounded-xl border px-3 py-1 text-sm text-gray-700 h-10 overflow-y-auto">
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
        </select>

        <!-- Enroll Button -->
        <NuxtLink
          to="/enroll"
          class="rounded-xl bg-[#145DA0] px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Enroll Now
        </NuxtLink>
      </div>

      <!-- Mobile Button -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden p-2 rounded-lg border text-gray-700"
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-white border-t">
      <ul class="flex flex-col gap-4 px-4 py-4 text-sm font-medium text-gray-700">
        <li><NuxtLink to="/" @click="close">Home</NuxtLink></li>
        <li><NuxtLink to="/about" @click="close">About us</NuxtLink></li>
        <li><NuxtLink to="/learning" @click="close">Learning Programs</NuxtLink></li>
        <li><NuxtLink to="/contact" @click="close">{{ $t('contact') }}</NuxtLink></li>

        <!-- Mobile language selector -->
        <li class="pt-2">
          <select v-model="$i18n.locale" class="w-full rounded-xl border px-3 py-2 text-sm text-gray-700">
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
        </li>

        <li class="pt-2">
          <NuxtLink
            to="/enroll"
            class="block text-center rounded-xl bg-[#145DA0] px-5 py-2 text-white"
            @click="close"
          >
            Enroll Now
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const isOpen = ref(false)
const close = () => (isOpen.value = false)

// Use i18n composable
const { locale } = useI18n()

// Set default language to English
locale.value = 'en'
</script>