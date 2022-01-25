export interface Metadata {
  title: string;
  slug: string;
  description: string;
}

export interface Article {
  metadata: Metadata;
  content: string;
}
