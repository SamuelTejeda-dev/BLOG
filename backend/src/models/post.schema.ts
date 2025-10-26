import { z } from "zod";

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

// Schema list da Editor.js
const ListItemSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    content: z
      .string()
      .min(1, { message: "Ogni elemento della lista deve avere contenuto." }),
    meta: z
      .object({
        checked: z.boolean().optional(),
        start: z.number().optional(),
        counterType: z.string().optional(),
      })
      .optional(),
    // 👇 supporta liste annidate
    items: z.array(ListItemSchema).optional(),
  })
);

//Definizione dello schema principale del blocco list
const ListBlockDataSchema = z.object({
  style: z.enum(["ordered", "unordered", "checklist"]),
  meta: z
    .object({
      start: z.number().optional(),
      counterType: z.string().optional(),
    })
    .optional(),
  items: z
    .array(ListItemSchema)
    .min(1, { message: "La lista deve contenere almeno un elemento." }),
});

// Schema code da editor js
const CodeBlockDataSchema = z.object({
  code: z.string().min(1, { message: "Il codice non può essere vuoto." }),
  language: z.string().optional(), // puoi aggiungere se vuoi evidenziazione
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
    type: z.literal("code"),
    data: CodeBlockDataSchema,
  }),
  z.object({
    id: z.string().optional(),
    type: z.literal("list"),
    data: ListBlockDataSchema,
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
