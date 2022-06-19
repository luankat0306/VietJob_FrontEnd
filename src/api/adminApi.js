import axiosClient from './axiosClient';

const endPoint = '/admin';
const adminApi = {
  chart: async () => {
    return await axiosClient.get(endPoint + '/chart');
  },
  count: async () => {
    return await axiosClient.get(endPoint + '/count');
  }
};

export default adminApi;
