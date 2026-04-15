import { formatDistanceToNowStrict } from 'date-fns';

export function formatDate(value) {
  if (!value) return '';
  try {
    const date = value?.toDate ? value.toDate() : new Date(value);
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
      return 'just now';
    }
    return formatDistanceToNowStrict(date, { addSuffix: true });
  } catch {
    return 'just now';
  }
}
