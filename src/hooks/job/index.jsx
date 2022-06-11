import { isEmpty } from '@/utils/verify';
import { useMutation, useQuery } from 'react-query';
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
  return useMutation(jobApi.createJob);
};

export const useMutationUpdateJob = () => {
  return useMutation(jobApi.updateJob);
};

export const useMutationDeleteJob = () => {
  return useMutation(jobApi.deleteJob);
};
