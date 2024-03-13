<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="quote-menu-item">Random quotes</RouterLink>
        <RouterLink to="/quotes_favorite" class="quote-menu-item">Favorite quotes</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
}

nav {
  width: 100%;

  .quote-menu-item {
    margin-right: 20px;
    font-size: 18px;
    color: #333;
  }
}
</style>
