import axiosClient from './axiosClient';

const endPoint = '/employers';
const employerApi = {
  getAllEmployers: async ({ queryKey }) => {
    return await axiosClient.get(endPoint, { params: queryKey[1] });
  },
  getEmployerById: async ({ queryKey }) => {
    return await axiosClient.get(`${endPoint}/${queryKey[1]}`);
  },
  getEmployerByUserId: async ({ queryKey }) => {
    return await axiosClient.get(`${endPoint}/user/${queryKey[1]}`);
  },
  createEmployer: async (employer) => {
    return await axiosClient.employer(endPoint, employer);
  },
  updateEmployer: async (employer) => {
    const { _id, ...data } = employer;
    return await axiosClient.put(`${endPoint}/${_id}`, data);
  },
  deleteEmployer: async (id) => {
    return await axiosClient.delete(`${endPoint}/${id}`);
  }
};

export default employerApi;
