import { isEmpty } from '@/utils/verify';
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
  return useMutation(skillCandidateApi.createSkillCandidate, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};

export const useMutationUpdateSkillCandidate = () => {
  const queryClient = useQueryClient();

  return useMutation(skillCandidateApi.updateSkillCandidate, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};

export const useMutationDeleteSkillCandidate = () => {
  const queryClient = useQueryClient();

  return useMutation(skillCandidateApi.deleteSkillCandidate, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};
