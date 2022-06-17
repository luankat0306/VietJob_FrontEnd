import { isEmpty } from '@/utils/verify';
import { useMutation, useQuery } from 'react-query';
import careerApi from '../../api/careerApi';

const key = 'career';
export const useCareers = (params) => {
  return useQuery([key, params], careerApi.getAllCareers);
};

export const useCareer = (id) => {
  return useQuery([key, id], careerApi.getCareerById, {
    enabled: !isEmpty(id)
  });
};

export const useMutationCreateCareer = () => {
  return useMutation(careerApi.createCareer);
};

export const useMutationUpdateCareer = () => {
  return useMutation(careerApi.updateCareer);
};

export const useMutationDeleteCareer = () => {
  return useMutation(careerApi.deleteCareer);
};
