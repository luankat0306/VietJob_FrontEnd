import { isEmpty } from '@/utils/verify';
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

  return useMutation(
    async (data) => {
      const file = await uploadFile(data.image[0]);

      certificateApi.createCertificate({
        ...data,
        image: file
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(key);
      }
    }
  );
};

export const useMutationUpdateCertificate = () => {
  const queryClient = useQueryClient();
  const { uploadFile } = useUploadFile();
  return useMutation(
    async (data) => {
      let { __v, image, ...rest } = data;
      image = data.image[0];
      console.log(image);
      console.log(image instanceof File);

      if (image instanceof File) {
        const file = await uploadFile(data.image[0]);
        certificateApi.updateCertificate({ ...rest, image: file });
        return;
      }

      certificateApi.updateCertificate({ ...rest });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(key);
      }
    }
  );
};

export const useMutationDeleteCertificate = () => {
  const queryClient = useQueryClient();

  return useMutation(certificateApi.deleteCertificate, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};
