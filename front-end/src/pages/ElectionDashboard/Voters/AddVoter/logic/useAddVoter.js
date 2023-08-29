import { useContext, useState } from "react";
import { useFormik } from "formik";
import { ElectionContextApp } from "../../../../../utils/contexts/ElectionContext";
import votersSchemas from "../../logic/votersValidationSchema";
import votersService from "../../logic/votersService";
import { toast } from "react-toastify";


const useAddVoter = (setShowModal, getVoters) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { election } = useContext(ElectionContextApp);

  const initialValues = {
    name: "",
    email: "",
    voterId: "",
    key: ""
  };

  const addVoter = async (values) => {
    try {
      setError();
      setLoading(true);
      const response = await votersService.addVoter(values);
      if (response.status === 201) {
        toast.success("Voter successfully created !");
        setShowModal(false);
        getVoters();
      }else{
        toast.error("Error occured");
      }
    } catch (error) {
      toast.error("Error occured");
      setError("Error Occured");
      console.error("Error in addVoter");
    } finally {
      setLoading(false);
    }

  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: votersSchemas.addVoterSchema,
    onSubmit: addVoter,
  })

  return {
    loading,
    error,
    formik
  }

}
export default useAddVoter;