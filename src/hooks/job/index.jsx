import { isEmpty } from '@/utils/verify';
import { useSnackbar } from 'notistack';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import jobApi from '../../api/jobApi';

const key = 'jobs';
export const useJobs = (params) => {
  return useQuery([key, params], jobApi.getAllJobs, {
    enabled: !isEmpty(params)
  });
};

export const useJob = (id) => {
  return useQuery([key, id], jobApi.getJobById, {
    enabled: !isEmpty(id)
  });
};

export const useMutationCreateJob = () => {
  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();

  return useMutation(jobApi.createJob, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      enqueueSnackbar('Đăng tin tuyển dụng thành công', { variant: 'success' });
    },
    onError: (error) => {
      console.log(error);
      enqueueSnackbar(error?.message || 'Đăng tin tuyển dụng thất bại', { variant: 'error' });
    }
  });
};

export const useMutationUpdateJob = () => {
  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();
  return useMutation(jobApi.updateJob, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      enqueueSnackbar('Cập nhật tin tuyển dụng thành công', { variant: 'success' });
    },
    onError: (error) => {
      console.log(error);
      enqueueSnackbar(error?.message || 'Cập nhật tin tuyển dụng thất bại', { variant: 'error' });
    }
  });
};

export const useMutationDeleteJob = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(jobApi.deleteJob, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      enqueueSnackbar('Xóa tin tuyển dụng thành công', { variant: 'success' });
    },
    onError: (error) => {
      console.log(error);
      enqueueSnackbar(error?.message || 'Xóa tin tuyển dụng thất bại', { variant: 'error' });
    }
  });
};
