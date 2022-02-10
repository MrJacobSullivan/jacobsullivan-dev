export interface ArticleData {
  title: string;
  slug: string;
}

export interface ArticleContent {
  date: string;
  tags: string[];
  body: string;
}

export interface Article {
  data: ArticleData;
  content: ArticleContent;
}
