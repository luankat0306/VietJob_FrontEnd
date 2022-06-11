import axiosClient from './axiosClient';

const endPoint = '/career';
const careerApi = {
  getAllCareers: async ({ queryKey }) => {
    return await axiosClient.get(endPoint, { params: queryKey[1] });
  },
  getCareerById: async ({ queryKey }) => {
    return await axiosClient.get(`${endPoint}/${queryKey[1]}`);
  },
  createCareer: async (career) => {
    return await axiosClient.career(endPoint, career);
  },
  updateCareer: async (career) => {
    return await axiosClient.put(`${endPoint}/${career.id}`, career);
  },
  deleteCareer: async (id) => {
    return await axiosClient.delete(`${endPoint}/${id}`);
  }
};

export default careerApi;
