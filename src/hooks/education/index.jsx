import { isEmpty } from '@/utils/verify';
import { useSnackbar } from 'notistack';
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
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(educationApi.createEducation, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      enqueueSnackbar('Thêm thành công', { variant: 'success' });
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  });
};

export const useMutationUpdateEducation = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(educationApi.updateEducation, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      enqueueSnackbar('Cập nhật thành công', { variant: 'success' });
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  });
};

export const useMutationDeleteEducation = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(educationApi.deleteEducation, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      enqueueSnackbar('Xóa thành công', { variant: 'success' });
    },
    onError: () => {
      enqueueSnackbar('Xóa thất bại', { variant: 'error' });
    }
  });
};
