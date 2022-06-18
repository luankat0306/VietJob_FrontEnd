import { isEmpty } from '@/utils/verify';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import employerApi from '../../api/employerApi';

const key = 'employers';
export const useEmployers = (params) => {
  return useQuery([key, params], employerApi.getAllEmployers, {});
};

export const useEmployer = (id) => {
  return useQuery([key, id], employerApi.getEmployerById, {
    enabled: !isEmpty(id)
  });
};

export const useEmployerByUserId = (id) => {
  return useQuery([key, id], employerApi.getEmployerByUserId, {
    enabled: !isEmpty(id)
  });
};

export const useMutationCreateEmployer = () => {
  return useMutation(employerApi.createEmployer, {
    onSuccess: () => {
      useQueryClient().invalidateQueries(key);
    }
  });
};

export const useMutationUpdateEmployer = () => {
  const queryClient = useQueryClient();
  return useMutation(employerApi.updateEmployer, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};

export const useMutationDeleteEmployer = () => {
  return useMutation(employerApi.deleteEmployer, {
    onSuccess: () => {
      useQueryClient().invalidateQueries(key);
    }
  });
};
