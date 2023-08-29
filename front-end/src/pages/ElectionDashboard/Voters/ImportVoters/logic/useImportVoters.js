import { useRef, useState } from "react";
import { toast } from "react-toastify";
import votersService from "../../logic/votersService";


const useImportVoters = (setShowModal) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const fileRef = useRef();

  const importVoters = async () => {
    try {
      setError();
      setLoading(true);
      const response = await votersService.bulkCreatVoters(fileRef.current.value);
      // if (response.status === 201) {
      //   toast.success("Voter successfully created !");
      //   setShowModal(false);
      // }
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