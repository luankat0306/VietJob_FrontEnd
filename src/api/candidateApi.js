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
    return await axiosClient.put(`${endPoint}/${candidate.id}`, candidate);
  },
  deleteCandidate: async (id) => {
    return await axiosClient.delete(`${endPoint}/${id}`);
  }
};

export default candidateApi;
