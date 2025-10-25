export function formatDate(isoDate: string): string {
  const date = new Date(isoDate); // gestisce già ISO string

  if (isNaN(date.getTime())) return "";

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options).replace(",", "");
}
