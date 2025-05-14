import { eq } from "drizzle-orm";
import { db } from "../config/db";
import { InsertPost, postsTable } from "../models/PostModel";

export async function createPost(post: InsertPost) {
  return db.insert(postsTable).values(post);
}

export async function getPostFromId(id: number) {
  return db
    .select({ id: postsTable.id })
    .from(postsTable)
    .where(eq(postsTable.id, id));
}

export async function getPostFromSlug(slug: string) {
  return db
    .select({ slug: postsTable.slug })
    .from(postsTable)
    .where(eq(postsTable.slug, slug));
}

export async function deletePost(id: number) {
  return db.delete(postsTable).where(eq(postsTable.id, id));
}
