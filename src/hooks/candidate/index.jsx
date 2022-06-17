import { isEmpty } from '@/utils/verify';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import candidateApi from '../../api/candidateApi';

const key = 'candidates';
export const useCandidates = (params) => {
  return useQuery([key, params], candidateApi.getAllCandidates, {});
};

export const useCandidate = (id) => {
  return useQuery([key, id], candidateApi.getCandidateById, {
    enabled: !isEmpty(id)
  });
};

export const useCandidateByUserId = (id) => {
  return useQuery([key, id], candidateApi.getCandidateByUserId, {
    enabled: !isEmpty(id)
  });
};

export const useMutationCreateCandidate = () => {
  return useMutation(candidateApi.createCandidate, {
    onSuccess: () => {
      useQueryClient().invalidateQueries(key);
    }
  });
};

export const useMutationUpdateCandidate = () => {
  const queryClient = useQueryClient();
  return useMutation(candidateApi.updateCandidate, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};

export const useMutationDeleteCandidate = () => {
  return useMutation(candidateApi.deleteCandidate, {
    onSuccess: () => {
      useQueryClient().invalidateQueries(key);
    }
  });
};
