import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { ElectionContextApp } from "../../../../../utils/contexts/ElectionContext";
import votersSchemas from "../../logic/votersValidationSchema";
import votersService from "../../logic/votersService";
import { toast } from "react-toastify";


const useEditVoter = (setShowModal, voterIdRef, getVoters) => {

  const initialValues = {
    name: "",
    email: "",
    voterId: "",
    key: ""
  };

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const [editValues, setEditValues] = useState(initialValues);
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState();

  const { election } = useContext(ElectionContextApp);

 

  const getVoterById = async () => {
    try {
      setError();
      setLoading(true);
      const id = voterIdRef.current;
      const response = await votersService.getVoterById(id);
      if (response.status === 200) {
        setData(response.data);
        setEditValues({
            name: response.data.name,
            email: response.data.email,
            voterId: response.data.voterId,
            key: response.data.key
        })
      } else {
        setError("Error occured")
      }
    } catch (error) {
      setError("Error Occured");
      console.error("Error in getVoterById");
    } finally {
      setLoading(false);
    }
  }

  const editVoter = async (values) => {
    try {
      setEditError();
      setEditLoading(true);
      const id = voterIdRef.current;
      const response = await votersService.editVoter(id, values);
      if (response.status === 200) {
        toast.success("Voter successfully updated !");
        setShowModal(false);
        getVoters();
      } else {
        toast.error("Error occured");
      }
    } catch (error) {
      toast.error("Error occured");
      setEditError("Error Occured");
      console.error("Error in editVoter");
    } finally {
      setEditLoading(false);
    }

  }

  const formik = useFormik({
    initialValues: editValues,
    enableReinitialize: true,
    validationSchema: votersSchemas.addVoterSchema,
    onSubmit: editVoter
  })


  useEffect(() => {
    getVoterById();
  }, [])


  return {
    data,
    loading,
    editValues,
    editLoading,
    error,
    formik
  }

}
export default useEditVoter;