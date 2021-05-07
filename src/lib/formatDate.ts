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
  const [, year, , month] = dateString.match(
    /^([0-9]{4})(-([0-9]{2}))?(-([0-9]{2}))?$/
  );
  if (month) {
    return `${months[parseInt(month, 10) - 1]} ${year}`;
  }
  return year;
}
