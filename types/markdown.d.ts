export interface Metadata {
  title: string;
  slug: string;
  description?: string;
  date?: string;
  tags?: string[];
}

export interface Article {
  metadata: Metadata;
  content: string;
}
