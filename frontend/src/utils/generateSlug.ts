export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // Rimuove simboli strani
    .replace(/\s+/g, "-") // Spazi → trattini
    .replace(/-+/g, "-"); // Rimuove trattini doppi
}
