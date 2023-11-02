import { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import votersService from "../../logic/votersService";
import { ElectionContextApp } from "../../../../../utils/contexts/ElectionContext";


const useImportVoters = (setShowModal, getVoters) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { election } = useContext(ElectionContextApp);
  const fileRef = useRef();

  const importVoters = async () => {
    try {
      setError();
      setLoading(true);
      const response = await votersService.bulkCreateVoters(fileRef.current.files[0], election.id);
      console.log("response", response)
      if (response.status === 201) {
        toast.success("Voters successfully created !");
        setShowModal(false);
        getVoters();
      }
    } catch (error) {
      toast.error("Error occured");
      setError("Error Occured");
      console.error("Error in importVoters");
    } finally {
      setLoading(false);
    }

  }


  return {
    loading,
    error,
    fileRef,
    importVoters
  }

}
export default useImportVoters;