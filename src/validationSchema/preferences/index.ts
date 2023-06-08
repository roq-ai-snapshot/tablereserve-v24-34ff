import * as yup from 'yup';

export const preferenceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  value: yup.string().required(),
  user_id: yup.string().nullable().required(),
  reservation_id: yup.string().nullable().required(),
});
