<script setup lang="ts">
import { onMounted } from 'vue';
import QuoteItem from '@/components/QuoteItem.vue';
import Preloader from '@/components/Preloader.vue';
import { useQuoteStore } from '@/stores/quotes';
import { storeToRefs } from 'pinia';

const quoteStore = useQuoteStore();

const refreshQuotes = (): Promise<void> => quoteStore.getRandomQuotes();

const { randomQuotes, isLoading } = storeToRefs(quoteStore);
onMounted(() => {
  if (!quoteStore.randomQuotes.length) {
    quoteStore.getRandomQuotes();
  }
});
</script>

<template>
  <main class="quotes">
    <header class="quotes-header">
      <h1 class="quotes-title">Quotes</h1>
      <button class="quotes-refresh-btn" @click="refreshQuotes">Refresh quotes</button>
    </header>
    <div class="quotes-list" v-if="!isLoading">
      <QuoteItem v-for="quote in randomQuotes" :key="quote._id" :quote="quote" />
    </div>
    <Preloader v-else />
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

  &-refresh-btn {
    padding: 5px 10px;
    font-size: 18px;
    cursor: pointer;
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
