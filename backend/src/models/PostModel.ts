import {
  pgTable,
  serial,
  text,
  timestamp,
  json,
  uniqueIndex,
} from "drizzle-orm/pg-core";

//Tabella posts
export const postsTable = pgTable(
  "posts_table",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull().unique(),
    title: text("title").notNull().unique(),
    content: json("content").notNull(),
    author: text("author").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (table) => ({
    slugIndex: uniqueIndex("slug_idx").on(table.slug),
  })
);

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;
