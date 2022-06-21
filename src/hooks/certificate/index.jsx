import { isEmpty } from '@/utils/verify';
import { useSnackbar } from 'notistack';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import certificateApi from '../../api/certificateApi';
import useUploadFile from '../uploadFile';

const key = 'certificate';
export const useCertificates = (params) => {
  return useQuery([key, params], certificateApi.getAllCertificates, {
    enabled: !isEmpty(params)
  });
};

export const useCertificate = (id) => {
  return useQuery([key, id], certificateApi.getCertificateById, {
    enabled: !isEmpty(id)
  });
};

export const useMutationCreateCertificate = () => {
  const queryClient = useQueryClient();
  const { uploadFile } = useUploadFile();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    async (data) => {
      const file = data.image[0] ? await uploadFile(data.image[0]) : '';

      certificateApi.createCertificate({
        ...data,
        image: file
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(key);
        enqueueSnackbar('Thêm thành công', {
          variant: 'success'
        });
      },
      onError: (err) => {
        enqueueSnackbar(err.message, { variant: 'error' });
      }
    }
  );
};

export const useMutationUpdateCertificate = () => {
  const queryClient = useQueryClient();
  const { uploadFile } = useUploadFile();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    async (data) => {
      let { __v, image, ...rest } = data;
      image = data.image[0];
      console.log(image);
      console.log(image instanceof File);

      if (image instanceof File) {
        const file = data.image[0] ? await uploadFile(data.image[0]) : '';
        certificateApi.updateCertificate({ ...rest, image: file });
        return;
      }

      certificateApi.updateCertificate({ ...rest });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(key);
        enqueueSnackbar('Cập nhật thành công', { variant: 'success' });
      },
      onError: (err) => {
        enqueueSnackbar(err.message, { variant: 'error' });
      }
    }
  );
};

export const useMutationDeleteCertificate = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(certificateApi.deleteCertificate, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      enqueueSnackbar('Xoá thành công', { variant: 'success' });
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  });
};
