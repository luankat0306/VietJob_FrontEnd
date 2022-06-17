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
  return useMutation(certificateApi.createCertificate, {
    onMutate: async (values) => {
      const { image } = values;

      return {
        ...values,
        image: image ? await uploadFile(image) : ''
      };
    },
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};

export const useMutationUpdateCertificate = () => {
  const queryClient = useQueryClient();
  const { uploadFile } = useUploadFile();
  return useMutation(certificateApi.updateCertificate, {
    onMutate: async (values) => {
      const { image } = values;
      console.log(image);
      return {
        ...values,
        image: image ? await uploadFile(image[0]) : ''
      };
    },
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};

export const useMutationDeleteCertificate = () => {
  const queryClient = useQueryClient();

  return useMutation(certificateApi.deleteCertificate, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};
