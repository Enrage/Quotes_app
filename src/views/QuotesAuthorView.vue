<script setup lang="ts">
import QuoteItem from '@/components/QuoteItem.vue';
import Preloader from '@/components/Preloader.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios, { type AxiosResponse } from 'axios';
import type { Quote, AuthorsResponse, AuthorWithQuotes, Author } from '@/types/QuotesTypes';
import { API_GET_AUTHOR_BY_QUERY, API_GET_AUTHOR_BY_ID } from '@/constants/api';

const quotesByAuthor = ref<Quote[]>([]);
const authorName = ref<string>('');
const isLoading = ref<boolean>(false);

async function getAuthorIdBySlug(authorSlug: string): Promise<void> {
  try {
    isLoading.value = true;
    const response: AxiosResponse<AuthorsResponse> = await axios.get(`${API_GET_AUTHOR_BY_QUERY}?query=${authorSlug}`);
    const author: Author = response.data.results[0];
    const authorId: string = author._id;
    authorName.value = response.data.results[0].name;
    await getQuotesByAuthorId(authorId);
  } catch (error: unknown) {
    console.error(error);
    throw error;
  } finally {
    isLoading.value = false;
  }
}

async function getQuotesByAuthorId(authorId: string): Promise<void> {
  try {
    const response: AxiosResponse<AuthorWithQuotes> = await axios.get(`${API_GET_AUTHOR_BY_ID}/${authorId}`);
    quotesByAuthor.value = response.data.quotes;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
}

const route = useRoute();

onMounted(() => {
  const authorSlug: string = route.params.author as string;
  getAuthorIdBySlug(authorSlug);
});
</script>

<template>
  <main class="quotes">
    <header class="quotes-header">
      <h1 class="quotes-title">Quotes by author: {{ authorName }}</h1>
    </header>
    <div class="quotes-list" v-if="!isLoading">
      <QuoteItem v-for="quote in quotesByAuthor" :key="quote._id" :quote="quote" />
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
