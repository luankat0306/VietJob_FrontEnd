import AutocompleteField from '@/components/Field/AutocompleteField';
import CKEditorField from '@/components/Field/CKEditorField';
import FieldLayout from '@/components/FieldLayout';
import { useSkills } from '@/hooks/skill';
import {
  useMutationCreateSkillCandidate,
  useMutationDeleteSkillCandidate,
  useMutationUpdateSkillCandidate,
  useSkillCandidates
} from '@/hooks/skillCandidate';

import { grey } from '@/theme/themeColors';
import { Add } from '@mui/icons-material';
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import ButtonEdit from './ButtonEdit';

const SkillCandidate = ({ data }) => {
  const { id } = useParams();

  const { data: skillCandidates = [] } = useSkillCandidates({ candidateId: data?._id });
  const { mutateAsync: mutateCreate, isLoading: isLoadingCreate } =
    useMutationCreateSkillCandidate();
  const { mutateAsync: mutateUpdate, isLoading: isLoadingUpdate } =
    useMutationUpdateSkillCandidate();
  const { mutateAsync: mutateDelete, isLoading: isLoadingDelete } =
    useMutationDeleteSkillCandidate();
  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      description: ''
    }
  });
  const [showEdit, setShowEdit] = useState('');
  const onSubmitCreate = async (values) => {
    const { skill, ...rest } = values;
    await mutateCreate({ ...rest, candidateId: data?._id, skillId: skill?.value });
  };

  const onSubmitUpdate = async (values) => {
    const { __v, candidate, skill, ...rest } = values;
    await mutateUpdate({ ...rest, candidateId: candidate, skillId: skill?.value });
  };

  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography my={2} component="div" variant="h6" fontWeight={700}>
            Kỹ năng
          </Typography>

          {skillCandidates.map((skillCandidate) => (
            <Card
              key={skillCandidate._id}
              variant="outlined"
              sx={{
                p: 1,
                bgcolor: grey[200],
                color: grey[600],
                fontWeight: 700
              }}
              onMouseEnter={() => !id && setShowEdit(skillCandidate._id)}
              onMouseLeave={() => setShowEdit('')}
            >
              <Stack spacing={1} direction="row">
                <div>{skillCandidate?.skill?.name}</div>
                {showEdit === skillCandidate._id && (
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderColor: grey[600]
                    }}
                  />
                )}
                <ButtonEdit
                  fontSize="11px"
                  isLoading={isLoadingUpdate}
                  fullWidth
                  maxWidth="sm"
                  title="Kỹ năng"
                  onClick={() => {
                    const skillCandidate = skillCandidates.find((item) => item._id === showEdit);
                    if (skillCandidate) {
                      reset({
                        ...skillCandidate,
                        skill: {
                          value: skillCandidate?.skill?._id,
                          label: skillCandidate?.skill?.name
                        }
                      });
                    }
                    setShowEdit('');
                  }}
                  sx={{
                    display: showEdit === skillCandidate._id ? 'inline-flex' : 'none'
                  }}
                  onSubmit={handleSubmit(onSubmitUpdate)}
                >
                  <SkillCandidateEditForm watch={watch} control={control} />
                </ButtonEdit>
                <ButtonEdit
                  isDelete
                  fontSize="11px"
                  isLoading={isLoadingUpdate}
                  fullWidth
                  maxWidth="sm"
                  title="Xoá Kỹ năng"
                  onClick={() => {
                    setShowEdit('');
                  }}
                  sx={{
                    display: showEdit === skillCandidate._id ? 'inline-flex' : 'none',
                    ml: 2
                  }}
                  onSubmit={() => {
                    const skillCandidate = skillCandidates.find((item) => item._id === showEdit);
                    if (skillCandidate) {
                      mutateDelete(skillCandidate._id);
                    }
                  }}
                >
                  <Typography variant="body2" color="textSecondary">
                    Bạn có chắc chắn muốn xoá kỹ năng này?
                  </Typography>
                </ButtonEdit>
              </Stack>
            </Card>
          ))}

          {!id && (
            <ButtonEdit
              isLoading={isLoadingCreate}
              onClick={() => {
                reset({
                  description: ''
                });
              }}
              button={
                <Typography
                  fontWeight="bold"
                  mt={'2px'}
                  component="div"
                  variant="body2"
                  color="primary"
                >
                  <Add sx={{ fontSize: '12px' }} /> Thêm kỹ năng
                </Typography>
              }
              fullWidth
              maxWidth="sm"
              title="Kỹ năng"
              onSubmit={handleSubmit(onSubmitCreate)}
            >
              <SkillCandidateEditForm watch={watch} control={control} />
            </ButtonEdit>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

const SkillCandidateEditForm = ({ control, watch }) => {
  const { data: skills = [] } = useSkills();
  return (
    <FieldLayout md={12} lg={12} xl={12} sx={{ mt: 2 }}>
      <AutocompleteField
        control={control}
        name="skill"
        label="Kỹ năng"
        placeholder="Kỹ năng"
        options={skills.map((skill) => {
          return {
            value: skill._id,
            label: skill.name
          };
        })}
      />
      <CKEditorField control={control} name="description" label="Mô tả" />
    </FieldLayout>
  );
};

export default SkillCandidate;
