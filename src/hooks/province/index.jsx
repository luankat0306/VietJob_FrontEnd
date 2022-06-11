import { useMutation, useQuery } from 'react-query';
import provinceApi from '../../api/provinceApi';

const key = 'province';
export const useProvinces = (params) => {
  return useQuery([key, params], provinceApi.getAllProvinces);
};

export const useProvince = (id) => {
  return useQuery([key, id], provinceApi.getProvinceById);
};

export const useMutationCreateProvince = () => {
  return useMutation(provinceApi.createProvince);
};

export const useMutationUpdateProvince = () => {
  return useMutation(provinceApi.updateProvince);
};

export const useMutationDeleteProvince = () => {
  return useMutation(provinceApi.deleteProvince);
};
