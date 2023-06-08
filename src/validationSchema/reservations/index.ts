import * as yup from 'yup';
import { preferenceValidationSchema } from 'validationSchema/preferences';

export const reservationValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  table_id: yup.string().nullable().required(),
  preference: yup.array().of(preferenceValidationSchema),
});
