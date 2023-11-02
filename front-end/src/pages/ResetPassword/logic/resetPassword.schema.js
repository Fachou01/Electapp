import * as yup from "yup";

export const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(5, "Password must be at least 5 length")
    .required("Password is a required field"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is a required field")
});
