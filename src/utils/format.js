export const formatNumber = (number) => {
  return Intl.NumberFormat().format(number, 'vi-VN');
};
