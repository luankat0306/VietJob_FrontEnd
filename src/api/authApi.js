import axiosClient from './axiosClient';

const ENDPOINT = '/auth';
const authApi = {
  login: async ({ email, password }) => {
    return axiosClient.post(`${ENDPOINT}/login`, { email, password });
  },
  signup: async ({ email, password, role }) => {
    return axiosClient.post(`${ENDPOINT}/signup`, { email, password, role });
  },
  logout: async () => {
    return axiosClient.post(`${ENDPOINT}/logout`);
  }
};

export default authApi;
