import axios from 'axios';
import queryString from 'query-string';
import { store } from '../redux/store';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: (params) => queryString.stringify(params)
});

axiosClient.interceptors.request.use(
  (config) => {
    // if (config.url?.includes('/account/')) {
    //   config.baseURL = '/api/v1';
    // }

    const token = store.getState().auth.jwt;
    if (token) {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    return response.data?.data;
  },
  (error) => {
    // if (error.response.status === 500) {
    // axios.get('/account/me').catch(e => {
    //   localStorage.removeItem('jwt');
    //   window.location.href = `/${process.env.REACT_APP_PREFIX_URL || 'admin-core'}/login`;
    // });
    // }
    if (error.response.status === 401) {
      localStorage.removeItem('jwt');
      window.location.href = `/dang-nhap`;
    }
    return Promise.reject(error.response.data);
  }
);

export default axiosClient;
