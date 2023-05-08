import { useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "./changeDateSchema";


const useChangeDate = () => {

    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const initialValues = {
        startDate: "",
        startTime:"",
        endDate: "",
        endTime:"",
    };


    const onSubmit = async (values, { resetForm }) => {
        setIsButtonLoading(true);
        try {
            console.log("values",values);
            const response = /* await updateElection(values);*/  true;
            if (response) {
                resetForm();
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsButtonLoading(false);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit,
    });

    return {
        formik, isButtonLoading
    }


}
export default useChangeDate