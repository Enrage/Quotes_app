import { createRouter, createWebHistory } from 'vue-router';
import QuotesRandomView from '@/views/QuotesRandomView.vue';
import QuotesAuthorView from '@/views/QuotesAuthorView.vue';
import QuotesFavoriteView from '@/views/QuotesFavoriteView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quotes',
      component: QuotesRandomView
    },
    {
      path: '/quotes_author/:author',
      name: 'quotes_author',
      component: QuotesAuthorView
    },
    {
      path: '/quotes_favorite',
      name: 'quotes_favorite',
      component: QuotesFavoriteView
    }
  ]
});

export default router;
