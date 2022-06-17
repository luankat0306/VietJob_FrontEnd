import { isEmpty } from '@/utils/verify';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import experienceApi from '../../api/experienceApi';

const key = 'experience';
export const useExperiences = (params) => {
  return useQuery([key, params], experienceApi.getAllExperiences, {
    enabled: !isEmpty(params)
  });
};

export const useExperience = (id) => {
  return useQuery([key, id], experienceApi.getExperienceById, {
    enabled: !isEmpty(id)
  });
};

export const useMutationCreateExperience = () => {
  const queryClient = useQueryClient();
  return useMutation(experienceApi.createExperience, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};

export const useMutationUpdateExperience = () => {
  const queryClient = useQueryClient();

  return useMutation(experienceApi.updateExperience, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};

export const useMutationDeleteExperience = () => {
  const queryClient = useQueryClient();

  return useMutation(experienceApi.deleteExperience, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};
