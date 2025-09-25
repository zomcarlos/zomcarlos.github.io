<template>
  <footer class="footer-links">
    <nav>
      <RouterLink :to="localizedPath('intro')">{{ t('home') }}</RouterLink> |
      <RouterLink :to="localizedPath('projects')">{{ t('projects') }}</RouterLink> |
      <RouterLink :to="localizedPath('curriculum')">{{ t('curriculum') }}</RouterLink>
    </nav>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

function localizedPath(page) {
  if (locale.value === 'pt') {
    if (page === 'intro') return '/pt'
    return `/pt/${page}`
  } else {
    if (page === 'intro') return '/'
    return `/${page}`
  }
}
</script>

<style scoped>
.footer-links {
  margin-top: 3rem;
  padding: 1rem 0;
  text-align: center;
  font-size: 16px;
}

.footer-links a {
  margin: 0 0.5rem;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>
