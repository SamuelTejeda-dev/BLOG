export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // Monday
    year: "numeric", // 2020
    month: "short", // Jan
    day: "numeric", // 20
  };

  // 'en-US' per ottenere "Monday, Jan 20, 2020"
  const formatted = date.toLocaleDateString("en-US", options);

  return formatted.replace(",", "");
}
