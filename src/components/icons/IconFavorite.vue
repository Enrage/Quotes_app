<script setup lang="ts">
const { isFavorite } = defineProps<{
  isFavorite: boolean;
}>();
</script>

<template>
  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" width="24" height="24">
    <path v-if="isFavorite" stroke-linecap="butt" stroke-linejoin="miter" stroke="#ffc106" stroke-width="1" fill="#ffc106"
      d="M12 2l2.4 6.8H22l-5.6 4.4 2.2 6.8-6-4.4-6 4.4 2.2-6.8L2 8.8h7.6L12 2z" />
    <path v-else class="not-favorite" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="1"
      d="M12 2l2.4 6.8H22l-5.6 4.4 2.2 6.8-6-4.4-6 4.4 2.2-6.8L2 8.8h7.6L12 2z" />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  path.not-favorite {
    stroke: #999;
    transition: all 0.2s ease;
  }

  &:hover {
    path.not-favorite {
      stroke: #000;
    }
  }
}
</style>
