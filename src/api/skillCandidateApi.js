import axiosClient from './axiosClient';

const endPoint = '/skillCandidate';
const skillCandidateApi = {
  getAllSkillCandidates: async ({ queryKey }) => {
    return await axiosClient.get(endPoint, { params: queryKey[1] });
  },
  getSkillCandidateById: async ({ queryKey }) => {
    return await axiosClient.get(`${endPoint}/${queryKey[1]}`);
  },
  createSkillCandidate: async (skillCandidate) => {
    return await axiosClient.post(endPoint, skillCandidate);
  },
  updateSkillCandidate: async (skillCandidate) => {
    const { _id, ...data } = skillCandidate;
    return await axiosClient.put(`${endPoint}/${_id}`, data);
  },
  deleteSkillCandidate: async (id) => {
    return await axiosClient.delete(`${endPoint}/${id}`);
  }
};

export default skillCandidateApi;
