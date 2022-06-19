import { isEmpty } from '@/utils/verify';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import applicationApi from '../../api/applicationApi';
import { useSnackbar } from 'notistack';

const key = 'application';
export const useApplications = (params) => {
  return useQuery([key, params], applicationApi.getAllApplications, {
    enabled: !isEmpty(params)
  });
};

export const useApplicationsByPostId = (params) => {
  return useQuery([key, params], applicationApi.getAllApplicationsByPostId, {
    enabled: !isEmpty(params)
  });
};

export const useApplication = (id) => {
  return useQuery([key, id], applicationApi.getApplicationById, {
    enabled: !isEmpty(id)
  });
};

export const useMutationCreateApplication = ({ alert = false, messageSuccess, messageError }) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(applicationApi.createApplication, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      alert &&
        enqueueSnackbar(messageSuccess, {
          variant: 'success'
        });
    },
    onError: (error) => {
      console.log(error);
      alert &&
        enqueueSnackbar(error?.message || messageError, {
          variant: 'error'
        });
    }
  });
};

export const useMutationUpdateApplication = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(applicationApi.updateApplication, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      enqueueSnackbar('Duyệt thành công', { variant: 'success' });
    },
    onError: (error) => {
      console.log(error);
      enqueueSnackbar(error?.message || 'Duyệt thất bại', { variant: 'error' });
    }
  });
};

export const useMutationDeleteApplication = () => {
  const queryClient = useQueryClient();

  return useMutation(applicationApi.deleteApplication, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};
