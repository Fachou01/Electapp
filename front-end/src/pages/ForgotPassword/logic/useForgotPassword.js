import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { validationSchema } from "./forgotPassword.schema";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "./forgotPasswordService";
import { toast } from "react-toastify";

const useForgotPassword = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [emailSentTimer, setEmailSentTimer] = useState(0);

  // Initial values of formik
  const initialValues = {
    email: ""
  };

  //on Submit form
  const onSubmit = async (values) => {
    try {
      setError();
      setLoading(true);
      const { email } = values;
      const response = await forgotPassword(email);
      if (response){
        toast.success("Email successfully sent")
        setEmailSentTimer(25);
      } 
      else setError("User with this email not found")
    } catch (error) {
      console.log(error);
      setError("Error Occured");
    }
    finally {
      setLoading(false);
    }

  };
  
  // formik hook
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit
  });

  useEffect(() => {
    let interval;
    if (emailSentTimer > 0) {
      interval = setInterval(() => {
        setEmailSentTimer(currentTimer => currentTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [emailSentTimer])


  return { loading, formik, error, navigate, emailSentTimer }
}


export default useForgotPassword;