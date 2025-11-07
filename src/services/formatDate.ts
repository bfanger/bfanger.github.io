export const months = [
  "Januari",
  "Februari",
  "Maart",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Augustus",
  "September",
  "Oktober",
  "November",
  "December",
];
export function formatReleaseDate(dateString: string): string {
  const match = dateString.match(/^([0-9]{4})(-([0-9]{2}))?(-([0-9]{2}))?$/);
  if (match === null) {
    throw new Error(`Unexpected data format: ${dateString}`);
  }
  const [, year, , month] = match;
  if (month) {
    return `${months[parseInt(month, 10) - 1]} ${year}`;
  }
  return year;
}
