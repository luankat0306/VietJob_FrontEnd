import { isEmpty } from '@/utils/verify';
import { useSnackbar } from 'notistack';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import skillCandidateApi from '../../api/skillCandidateApi';

const key = 'skillCandidate';
export const useSkillCandidates = (params) => {
  return useQuery([key, params], skillCandidateApi.getAllSkillCandidates, {
    enabled: !isEmpty(params)
  });
};

export const useSkillCandidate = (id) => {
  return useQuery([key, id], skillCandidateApi.getSkillCandidateById, {
    enabled: !isEmpty(id)
  });
};

export const useMutationCreateSkillCandidate = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(skillCandidateApi.createSkillCandidate, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      enqueueSnackbar('Thêm thành công', { variant: 'success' });
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  });
};

export const useMutationUpdateSkillCandidate = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(skillCandidateApi.updateSkillCandidate, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      enqueueSnackbar('Cập nhật thành công', { variant: 'success' });
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  });
};

export const useMutationDeleteSkillCandidate = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(skillCandidateApi.deleteSkillCandidate, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      enqueueSnackbar('Xoá thành công', { variant: 'success' });
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  });
};
