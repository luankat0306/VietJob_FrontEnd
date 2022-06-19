import axiosClient from './axiosClient';

const endPoint = '/application';
const applicationApi = {
  getAllApplications: async ({ queryKey }) => {
    return await axiosClient.get(endPoint, { params: queryKey[1] });
  },
  getAllApplicationsByPostId: async ({ queryKey }) => {
    return await axiosClient.get(endPoint + '/post', { params: queryKey[1] });
  },
  getApplicationById: async ({ queryKey }) => {
    return await axiosClient.get(`${endPoint}/${queryKey[1]}`);
  },
  createApplication: async (application) => {
    return await axiosClient.post(endPoint, application);
  },
  updateApplication: async (application) => {
    const { _id, ...data } = application;
    return await axiosClient.put(`${endPoint}/${_id}`, data);
  },
  deleteApplication: async (id) => {
    return await axiosClient.delete(`${endPoint}/${id}`);
  }
};

export default applicationApi;
