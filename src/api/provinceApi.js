import axiosClient from './axiosClient';

const endPoint = '/province';
const provinceApi = {
  getAllProvinces: async ({ queryKey }) => {
    return await axiosClient.get(endPoint, { params: queryKey[1] });
  },
  getProvinceById: async ({ queryKey }) => {
    return await axiosClient.get(`${endPoint}/${queryKey[1]}`);
  },
  createProvince: async (province) => {
    return await axiosClient.province(endPoint, province);
  },
  updateProvince: async (province) => {
    return await axiosClient.put(`${endPoint}/${province.id}`, province);
  },
  deleteProvince: async (id) => {
    return await axiosClient.delete(`${endPoint}/${id}`);
  }
};

export default provinceApi;
