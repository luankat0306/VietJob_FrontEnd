import axiosClient from './axiosClient';

const endPoint = '/skill';
const skillApi = {
  getAllSkills: async ({ queryKey }) => {
    return await axiosClient.get(endPoint, { params: queryKey[1] });
  },
  getSkillById: async ({ queryKey }) => {
    return await axiosClient.get(`${endPoint}/${queryKey[1]}`);
  },
  createSkill: async (skill) => {
    return await axiosClient.post(endPoint, skill);
  },
  updateSkill: async (skill) => {
    const { _id, ...data } = skill;
    return await axiosClient.put(`${endPoint}/${_id}`, data);
  },
  deleteSkill: async (id) => {
    return await axiosClient.delete(`${endPoint}/${id}`);
  }
};

export default skillApi;
