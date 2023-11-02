import * as yup from 'yup';

export const voterLogin = yup.object().shape({
  id: yup.string().required("Voter ID is a required field"),
  key: yup.string().required("Voter Key is a required field")
});
