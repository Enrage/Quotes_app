import { defineStore } from 'pinia';
import axios, { type AxiosResponse } from 'axios';
import type { Quote, QuotesState } from '@/types/QuotesTypes';
import { API_GET_RANDOM_QUOTES, API_GET_QUOTE_BY_ID } from '@/constants/api';

export const useQuoteStore = defineStore({
  id: 'quotes',

  state: (): QuotesState => ({
    randomQuotes: [],
    favoriteIds: [],
    favoriteQuotes: []
  }),

  actions: {
    async getRandomQuotes(): Promise<void> {
      try {
        const response: AxiosResponse<Quote[]> = await axios.get(API_GET_RANDOM_QUOTES, {
          params: {
            limit: 10 as number
          }
        });
        this.randomQuotes = response.data;
      } catch (error: unknown) {
        console.error(error);
      }
    },

    addToFavorites(quoteId: string): void {
      this.favoriteIds.push(quoteId);
      this.getQuoteByIdAndAddToFavorite(quoteId);
    },

    removeFromFavorites(quoteId: string): void {
      this.favoriteIds = this.favoriteIds.filter((id: string) => id !== quoteId);
      this.favoriteQuotes = this.favoriteQuotes.filter((quote: Quote) => quote._id !== quoteId);
    },

    clearFavorites(): void {
      this.favoriteIds = [];
      this.favoriteQuotes = [];
    },

    async getQuoteByIdAndAddToFavorite(quoteId: string): Promise<void> {
      try {
        const response: AxiosResponse<Quote> = await axios.get(`${API_GET_QUOTE_BY_ID}/${quoteId}`);
        this.favoriteQuotes.push(response.data);
      } catch (error: unknown) {
        console.error(error);
      }
    }
  }
});
