import { eq } from "drizzle-orm";
import { db } from "../config/db";
import { InsertPost, postsTable } from "../models/PostModel";

//funzioni crud per i post

export async function createPost(post: InsertPost) {
  return db.insert(postsTable).values(post);
}

export async function getXPosts(numberOfPost: number) {
  return db.select().from(postsTable).limit(numberOfPost);
}

export async function getPostById(id: number) {
  const result = await db
    .select()
    .from(postsTable)
    .where(eq(postsTable.id, id));
  return result[0];
}

export async function getPostBySlug(slug: string) {
  const result = await db
    .select()
    .from(postsTable)
    .where(eq(postsTable.slug, slug));
  return result[0];
}

export async function deletePost(id: number) {
  return db.delete(postsTable).where(eq(postsTable.id, id));
}
