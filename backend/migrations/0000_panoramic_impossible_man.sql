CREATE TABLE "posts_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"content" json NOT NULL,
	"author" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone NOT NULL,
	CONSTRAINT "posts_table_slug_unique" UNIQUE("slug"),
	CONSTRAINT "posts_table_title_unique" UNIQUE("title")
);
