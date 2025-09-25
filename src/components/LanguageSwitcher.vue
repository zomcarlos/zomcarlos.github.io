<template>
  <div class="lang-switch" @click="toggleLang">
    <span v-if="locale === 'en'">🇧🇷</span>
    <span v-else>🇺🇸</span>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

const { locale } = useI18n()
const router = useRouter()
const route = useRoute()

function toggleLang() {
  const newLang = locale.value === 'en' ? 'pt' : 'en'
  locale.value = newLang
  localStorage.setItem('lang', newLang)

  // build new path depending on lang
  let newPath = route.fullPath

  if (newLang === 'pt') {
    // ensure it starts with /pt
    if (!newPath.startsWith('/pt')) {
      newPath = '/pt' + (newPath === '/' ? '' : newPath)
    }
  } else {
    // remove /pt prefix
    if (newPath.startsWith('/pt')) {
      newPath = newPath.replace(/^\/pt/, '') || '/'
    }
  }

  router.push(newPath)
}
</script>

<style scoped>
.lang-switch {
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  left: 20px;
  transition: transform 0.2s, background-color 0.3s;
}

.lang-switch:hover {
  transform: scale(1.2);
}
</style>
