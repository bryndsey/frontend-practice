import { z } from "zod";

const ZNewsArticle = z.object({
  title: z.string(),
  subtitle: z.string(),
  dateString: z.string(),
  thumbnailUrl: z.string(),
  thumbnailWidth: z.number().int().positive(),
  thumbnailHeight: z.number().int().positive(),
});

export type NewsArticle = z.infer<typeof ZNewsArticle>;

const ZNewsArticleList = z.array(ZNewsArticle);

export function parseNewsArticleList(input: unknown): NewsArticle[] {
  return ZNewsArticleList.parse(input);
}
