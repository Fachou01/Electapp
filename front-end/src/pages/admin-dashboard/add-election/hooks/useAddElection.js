import { useState } from "react";
import { useFormik } from "formik";
import { addElection } from "../../services/admin-dashboard-service";
import { validationSchema } from "../schemas/addElection-schema";


const useAddElection = (showModal, setShowModal) => {

    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const initialValues = {
        title: "",
        description: "",
        startDate: "",
        startTime:"",
        endDate: "",
        endTime:"",
    };

    const handleShowModal = () => {
        setShowModal(!showModal);
    };

    const onSubmit = async (values, { resetForm }) => {
        setIsButtonLoading(true);
        try {
            console.log("values",values);
            const response = await addElection(values);
            if (response) {
                resetForm();
                setShowModal(!showModal);
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
        formik, showModal, handleShowModal, isButtonLoading
    }


}
export default useAddElection