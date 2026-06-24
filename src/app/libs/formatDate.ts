import moment from 'moment';

export const formatDate = (date: string, format = 'LL'): string => {
  return moment(date).format(format);
};
