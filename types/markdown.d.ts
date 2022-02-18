export interface ArticleData {
  title: string;
  slug: string;
  id: number;
  color: string;
}

export interface ArticleContent {
  date: string;
  description: string;
  technologies: string[];
  github: string;
  website: string;
  body: string;
}

export interface Article {
  data: ArticleData;
  content: ArticleContent;
}
