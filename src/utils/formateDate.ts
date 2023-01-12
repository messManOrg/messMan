import dayjs from 'dayjs';

export const formateDate = (date: Date) => {
   return dayjs(date).format('DD MMMM YYYY');
};
