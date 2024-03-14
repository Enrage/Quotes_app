export interface Quote {
  _id: string;
  content: string;
  author: string;
  length: number;
  dateAdded: Date;
  dateModified: Date;
  authorSlug: string;
  tags: string[];
}

export interface AuthorsResponse {
  count: number;
  lastItemIndex: number;
  page: number;
  results: Author[];
  totalCount: number;
  totalPages: number;
}

export interface Author {
  _id: string;
  name: string;
  description: string;
  link: string;
  dateAdded: Date;
  dateModified: Date;
  bio: string;
  quoteCount: number;
  slug: string;
}

export interface AuthorWithQuotes extends Author {
  quotes: Quote[];
}

export interface QuotesState {
  randomQuotes: Quote[];
  favoriteIds: string[];
  favoriteQuotes: Quote[];
  isLoading: boolean;
}
