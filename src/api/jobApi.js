import axiosClient from './axiosClient';

const endPoint = '/post';
const jobApi = {
  getAllJobs: async ({ queryKey }) => {
    return await axiosClient.get(endPoint, { params: queryKey[1] });
  },
  getJobById: async ({ queryKey }) => {
    return await axiosClient.get(`${endPoint}/${queryKey[1]}`);
  },
  createJob: async (job) => {
    return await axiosClient.post(endPoint, job);
  },
  updateJob: async (job) => {
    const { _id, ...data } = job;
    return await axiosClient.put(`${endPoint}/${_id}`, data);
  },
  deleteJob: async (id) => {
    return await axiosClient.delete(`${endPoint}/${id}`);
  }
};

export default jobApi;
