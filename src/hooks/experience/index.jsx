import { isEmpty } from '@/utils/verify';
import { useSnackbar } from 'notistack';
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
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(experienceApi.createExperience, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      enqueueSnackbar('Thêm thành công', { variant: 'success' });
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  });
};

export const useMutationUpdateExperience = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(experienceApi.updateExperience, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      enqueueSnackbar('Cập nhật thành công', { variant: 'success' });
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  });
};

export const useMutationDeleteExperience = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(experienceApi.deleteExperience, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      enqueueSnackbar('Xóa thành công', { variant: 'success' });
    },
    onError: () => {
      enqueueSnackbar('Xóa thất bại', { variant: 'error' });
    }
  });
};
