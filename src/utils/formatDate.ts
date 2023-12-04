export function formatDate(dateStr: string) {
  const options: Intl.DateTimeFormatOptions = {
    // weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  const date: Date = new Date(dateStr);
  return new Intl.DateTimeFormat('pt-BR', options).format(date);
}
