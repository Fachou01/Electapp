import { useFormik } from "formik";
import { useState } from "react";
import { validationSchema } from "./resetPassword.schema";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "./resetPasswordService";
import { toast } from "react-toastify";

const useResetPassword = () => {

  const navigate = useNavigate();
  const { token: resetToken } = useParams();
  const [loading, setLoading] = useState(false);

  // Initial values of formik
  const initialValues = {
    password: "",
    confirmPassword: ""
  };

  //on Submit form
  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const { password, confirmPassword } = values;
      const response = await resetPassword(password, confirmPassword, resetToken);
      if (response.status === 200){
        toast.success("Password successfully reseted");
        navigate("/");
      }
      else toast.error("Error Occured");
    } catch (error) {
      console.log(error);
      toast.error("Error Occured")
    }
    finally {
      setLoading(false);
    }
  };

  // formik hook
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return { loading, formik, alert, navigate }
}


export default useResetPassword;