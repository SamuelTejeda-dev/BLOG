import { z } from "zod";

export const postSchema = z.object({
  slug: z.string().min(1).max(255),
  title: z.string().min(1).max(255),
  content: z.array(z.string().min(1).max(255)),
  author: z.string().min(1).max(255),
});
