export interface ContextType {
  locale: "pt-BR" | "en";
}

export interface Post {
  content: string;
  meta: PostMeta;
}

export interface PostMeta {
  title: string;
  slug: string;
  tags: string[];
  date: string;
  summary: string;
}
