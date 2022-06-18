export const status = (status) => {
  switch (status) {
    case 0:
      return 'Đang chờ duyệt';
    case 1:
      return 'Đã chấp nhận';
    case 2:
      return 'Đã từ chối';
    default:
      return 'Đang chờ';
  }
};

export const statusColor = (status) => {
  switch (status) {
    case 0:
      return '#00A6E5';
    case 1:
      return '#28a745';
    case 2:
      return '#dc3545';
    default:
      return '#ffc107';
  }
};
