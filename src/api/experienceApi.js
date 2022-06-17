import axiosClient from './axiosClient';

const endPoint = '/experience';
const experienceApi = {
  getAllExperiences: async ({ queryKey }) => {
    return await axiosClient.get(endPoint, { params: queryKey[1] });
  },
  getExperienceById: async ({ queryKey }) => {
    return await axiosClient.get(`${endPoint}/${queryKey[1]}`);
  },
  createExperience: async (experience) => {
    return await axiosClient.post(endPoint, experience);
  },
  updateExperience: async (experience) => {
    const { _id, ...data } = experience;
    return await axiosClient.put(`${endPoint}/${_id}`, data);
  },
  deleteExperience: async (id) => {
    return await axiosClient.delete(`${endPoint}/${id}`);
  }
};

export default experienceApi;
