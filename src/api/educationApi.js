import axiosClient from './axiosClient';

const endPoint = '/education';
const educationApi = {
  getAllEducations: async ({ queryKey }) => {
    return await axiosClient.get(endPoint, { params: queryKey[1] });
  },
  getEducationById: async ({ queryKey }) => {
    return await axiosClient.get(`${endPoint}/${queryKey[1]}`);
  },
  createEducation: async (education) => {
    return await axiosClient.post(endPoint, education);
  },
  updateEducation: async (education) => {
    const { _id, ...data } = education;
    return await axiosClient.put(`${endPoint}/${_id}`, data);
  },
  deleteEducation: async (id) => {
    return await axiosClient.delete(`${endPoint}/${id}`);
  }
};

export default educationApi;
