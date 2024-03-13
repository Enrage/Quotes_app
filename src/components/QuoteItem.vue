<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import IconFavorite from '@/components/icons/IconFavorite.vue';
import type { Quote } from '@/types/QuotesTypes';
import { useQuoteStore } from '@/stores/quotes';

const quoteStore = useQuoteStore();

const { quote } = defineProps<{
  quote: Quote;
}>();

const isFavorite: ComputedRef<boolean> = computed(() => (quoteStore.favoriteIds as string[]).includes(quote._id));

const toggleFavorite = (quoteId: string): void => {
  if (isFavorite.value) {
    quoteStore.removeFromFavorites(quoteId);
  } else {
    quoteStore.addToFavorites(quoteId);
  }
};
</script>

<template>
  <div class="quote">
    <div class="quote-content">
      <div class="quote-favorite">
        <IconFavorite :isFavorite="isFavorite" @click="toggleFavorite(quote._id)" class="quote-favorite-btn" />
      </div>
      <p class="quote-content-text">{{ quote.content }}</p>
    </div>
    <div class="quote-info">
      <p class="quote-author">
        Автор:
        <router-link :to="{ name: 'quotes_author', params: { author: quote.authorSlug } }">
          {{ quote.author }}
        </router-link>
      </p>
      <p class="quote-date">Добавлено: {{ quote.dateModified }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.quote {
  width: 24%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background-color: #f1f1f1;
  margin-bottom: 1.3%;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:nth-child(4n-3) {
    background-color: lightyellow;
  }

  &:nth-child(4n-2) {
    background-color: #ffe7e7;
  }

  &:nth-child(4n-1) {
    background-color: #e2ffe2;
  }

  &:nth-child(4n) {
    background-color: lightcyan;
  }

  &-favorite {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;

    &-btn {
      cursor: pointer;
    }
  }

  &-content-text {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 15px;
  }

  &-author {
    font-size: 14px;
    font-style: italic;
    margin-bottom: 10px;
  }

  &-date {
    font-size: 12px;
  }
}

@media screen and (max-width: 992px) {
  .quote {
    width: 32%;
    margin-bottom: 2%;
  }
}

@media screen and (max-width: 768px) {
  .quote {
    width: 48%;
    margin-bottom: 4%;
  }
}

@media screen and (max-width: 576px) {
  .quote {
    width: 100%;
    margin-bottom: 5%;

    &-content-text {
      font-size: 18px;
    }
  }
}
</style>
