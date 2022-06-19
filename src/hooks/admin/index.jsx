import { isEmpty } from '@/utils/verify';
import { useMutation, useQuery } from 'react-query';
import adminApi from '../../api/adminApi';

const key = 'admin';
export const useAdminChart = () => {
  return useQuery(key + '/chart', adminApi.chart);
};
export const useAdminCount = () => {
  return useQuery(key + '/count', adminApi.count);
};
