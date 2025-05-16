import { z } from "zod";

export const contentSchema = z.object({
  title: z.string(),
  description: z.string(),
  imgUrl: z.string().url().optional(),
});

const contentArraySchema = z.array(contentSchema);

export const postSchema = z.object({
  slug: z.string().min(1).max(255),
  title: z.string().min(1).max(255),
  content: contentArraySchema,
  author: z.string().min(1).max(255),
});
