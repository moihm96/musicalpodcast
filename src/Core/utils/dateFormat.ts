export function getDateFormatter(dateInput: string | undefined) {
  if (dateInput === undefined) return "No Date available";

  const formatDate = new Date(dateInput);
  const day = formatDate.getUTCDate();
  const month = formatDate.getUTCMonth() + 1;
  const year = formatDate.getUTCFullYear();

  return `${day}/${month}/${year}`;
}
