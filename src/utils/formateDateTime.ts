import { format } from 'date-fns';

export function formatDate(date: Date) {
   return format(date, 'dd MMM yyyy');
}
export function formatTime(date: Date) {
   return format(date, "hh:mm aaaaa'm'");
}
