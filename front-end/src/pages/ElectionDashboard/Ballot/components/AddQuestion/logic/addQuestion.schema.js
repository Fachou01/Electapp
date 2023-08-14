import * as yup from "yup";

export const validationSchema = yup.object().shape({
  title: yup.string().required("Title is a required field"),
  description: yup.string()
});
