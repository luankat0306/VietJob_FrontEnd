import moment from 'moment';

export const formatNumber = (number) => {
  return Intl.NumberFormat().format(number, 'vi-VN');
};

export const removeEmpty = (obj) => {
  Object.keys(obj).forEach(
    (key) => (obj[key] === undefined || obj[key] === null || obj[key] === '') && delete obj[key]
  );
  return obj;
};

export const formatDate = (date) => {
  return moment(date).format('DD/MM/YYYY');
};
