import { isEmpty } from '@/utils/verify';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import skillApi from '../../api/skillApi';

const key = 'skill';
export const useSkills = (params) => {
  return useQuery([key, params], skillApi.getAllSkills, {});
};

export const useSkill = (id) => {
  return useQuery([key, id], skillApi.getSkillById, {
    enabled: !isEmpty(id)
  });
};

export const useMutationCreateSkill = () => {
  const queryClient = useQueryClient();
  return useMutation(skillApi.createSkill, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};

export const useMutationUpdateSkill = () => {
  const queryClient = useQueryClient();

  return useMutation(skillApi.updateSkill, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};

export const useMutationDeleteSkill = () => {
  const queryClient = useQueryClient();

  return useMutation(skillApi.deleteSkill, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    }
  });
};
