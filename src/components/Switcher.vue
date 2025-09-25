<template>
  <div class="theme-switch" @click="toggleTheme">
    <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <!-- Sun Icon -->
      <circle cx="12" cy="12" r="5"/>
      <g stroke="currentColor" stroke-width="2">
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </g>
    </svg>

    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <!-- Moon Icon -->
      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('darkMode')
  if (saved) {
    isDark.value = saved === 'true'
    updateBodyClass()
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true
    updateBodyClass()
  }
})

function updateBodyClass() {
  if (isDark.value) document.body.classList.add('dark-mode')
  else document.body.classList.remove('dark-mode')
}

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('darkMode', isDark.value)
  updateBodyClass()
}
</script>

<style scoped>
.theme-switch {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  width: 36px;
  height: 36px;
  color: var(--color-text);
  transition: color 0.3s, transform 0.2s;
}

.theme-switch:hover {
  transform: scale(1.2);
}
</style>

