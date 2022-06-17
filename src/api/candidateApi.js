import axiosClient from './axiosClient';

const endPoint = '/candidates';
const candidateApi = {
  getAllCandidates: async ({ queryKey }) => {
    return await axiosClient.get(endPoint, { params: queryKey[1] });
  },
  getCandidateById: async ({ queryKey }) => {
    return await axiosClient.get(`${endPoint}/${queryKey[1]}`);
  },
  getCandidateByUserId: async ({ queryKey }) => {
    return await axiosClient.get(`${endPoint}/user/${queryKey[1]}`);
  },
  createCandidate: async (candidate) => {
    return await axiosClient.candidate(endPoint, candidate);
  },
  updateCandidate: async (candidate) => {
    const { _id, ...data } = candidate;
    return await axiosClient.put(`${endPoint}/${_id}`, data);
  },
  deleteCandidate: async (id) => {
    return await axiosClient.delete(`${endPoint}/${id}`);
  }
};

export default candidateApi;
