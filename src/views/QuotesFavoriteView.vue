<script setup lang="ts">
import QuoteItem from '@/components/QuoteItem.vue';
import { useQuoteStore } from '@/stores/quotes';
import { storeToRefs } from 'pinia';

const quoteStore = useQuoteStore();
const { favoriteQuotes } = storeToRefs(quoteStore);

const clearFavoriteQuotes = (): void => quoteStore.clearFavorites();
</script>

<template>
  <main class="quotes">
    <header class="quotes-header">
      <h1 class="quotes-title">Favorite quotes</h1>
      <button class="quotes-clear-btn" :disabled="!favoriteQuotes.length" @click="clearFavoriteQuotes">
        Clear quotes
      </button>
    </header>
    <div class="quotes-list" v-if="favoriteQuotes.length">
      <QuoteItem v-for="quote in favoriteQuotes" :key="quote._id" :quote="quote" />
    </div>
    <div class="quotes-empty" v-else>
      There are no quotes yet!
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 20px 0;
}

.quotes {
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-title {
    font-size: 32px;
    margin: 0;
  }

  &-clear-btn {
    padding: 5px 10px;
    font-size: 18px;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  &-empty {
    margin-top: 20px;
    font-size: 20px;
    color: #333;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 20px;
    gap: 1.3%;
  }
}

@media screen and (max-width: 992px) {
  .quotes-list {
    gap: 2.0%;
  }
}

@media screen and (max-width: 768px) {
  .quotes-list {
    gap: 4.0%;
  }
}
</style>
