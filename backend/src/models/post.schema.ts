import { z } from "zod";

//validazione delle richieste

//Schema paragraph da editor js
const ParagraphBlockDataSchema = z.object({
  text: z
    .string()
    .min(1, { message: "Il testo del paragrafo non può essere vuoto." }),
});

//Schema header da editor js
const HeaderBlockDataSchema = z.object({
  text: z
    .string()
    .min(1, { message: "Il testo dell'intestazione non può essere vuoto." }),
  level: z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
  ]),
});

//Schema immagine da editor js
const ImageBlockDataSchema = z.object({
  file: z.object({
    url: z.string().url({ message: "L'URL dell'immagine non è valido." }),
  }),
  caption: z.string().optional(),
  withBorder: z.boolean().optional(),
  withBackground: z.boolean().optional(),
  stretched: z.boolean().optional(),
});

//schema dei tipi di dati da editor js
const EditorJsBlockDetailedSchema = z.discriminatedUnion("type", [
  z.object({
    id: z.string().optional(),
    type: z.literal("paragraph"),
    data: ParagraphBlockDataSchema,
  }),
  z.object({
    id: z.string().optional(),
    type: z.literal("header"),
    data: HeaderBlockDataSchema,
  }),
  z.object({
    id: z.string().optional(),
    type: z.literal("image"),
    data: ImageBlockDataSchema,
  }),
]);

//schema json passato da Editor JS
export const EditorJsOutputSchema = z.object({
  time: z.number().int().positive(), // Timestamp di quando è stato salvato
  blocks: z.array(EditorJsBlockDetailedSchema), // Array di blocchi (utilizzando lo schema dettagliato)
  version: z.string(), // Versione di Editor.js
});

//schema post
export const postSchema = z.object({
  title: z.string().min(1).max(255).nonempty(),
  slug: z.string().min(1).max(255),
  content: EditorJsOutputSchema,
  author: z.string().min(1).max(255).nonempty(),
  description: z.string().min(10).max(255).nonempty(),
  themes: z.array(z.string()).nonempty(),
});
