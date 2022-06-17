import axiosClient from './axiosClient';

const endPoint = '/certificate';
const certificateApi = {
  getAllCertificates: async ({ queryKey }) => {
    return await axiosClient.get(endPoint, { params: queryKey[1] });
  },
  getCertificateById: async ({ queryKey }) => {
    return await axiosClient.get(`${endPoint}/${queryKey[1]}`);
  },
  createCertificate: async (certificate) => {
    return await axiosClient.post(endPoint, certificate);
  },
  updateCertificate: async (certificate) => {
    const { _id, ...data } = certificate;
    return await axiosClient.put(`${endPoint}/${_id}`, data);
  },
  deleteCertificate: async (id) => {
    return await axiosClient.delete(`${endPoint}/${id}`);
  }
};

export default certificateApi;
