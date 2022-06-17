import { isEmpty } from '@/utils/verify';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import educationApi from '../../api/educationApi';

const key = 'education';
export const useEducations = (params) => {
  return useQuery([key, params], educationApi.getAllEducations, {
    enabled: !isEmpty(params)
  });
};

export const useEducation = (id) => {
  return useQuery([key, id], educationApi.getEducationById, {
    enabled: !isEmpty(id)
  });
};

export const useMutationCreateEducation = () => {
  const queryClient = useQueryClient();
  return useMutation(educationApi.createEducation, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};

export const useMutationUpdateEducation = () => {
  const queryClient = useQueryClient();

  return useMutation(educationApi.updateEducation, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};

export const useMutationDeleteEducation = () => {
  const queryClient = useQueryClient();

  return useMutation(educationApi.deleteEducation, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};
