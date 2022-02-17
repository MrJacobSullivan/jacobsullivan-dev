export interface Image {
  src: string;
  alt: string;
}

export interface ArticleData {
  title: string;
  slug: string;
  id: number;
}

export interface ArticleContent {
  date?: string;
  image?: Image;
  description?: string;
  technologies?: string[];
  tags?: string[];
  github?: string;
  website?: string;
  body: string;
}

export interface Article {
  data: ArticleData;
  content: ArticleContent;
}
