import { useEffect, useRef, useState } from "react";
import votersService from "./votersService";

const useVoters = () => {

  const [voters, setVoters] = useState();
  const [loading, setLoading] = useState(true);

  const [showAddVoter, setShowAddVoter] = useState(false);

  const voterIdRef = useRef();
  const [showEditVoter, setShowEditVoter] = useState(false);

  const [showImportVoters, setShowImportVoters] = useState(false);

  const getVoters = async () => {
    try {
      // setError();
      setLoading(true);
      const response = await votersService.getAllVoters();
      if (response.status === 200) {
        setVoters(response.data);
      }
    } catch (error) {
      // toast.error("Error occured");
      // setError("Error Occured");
      console.error("Error in getVoters");
    } finally {
      // setLoading(false);
      setLoading(false);
    }
  }


  useEffect(() => {
    getVoters();
  }, [])
  

  return {
    voters,
    loading,
    getVoters,
    showAddVoter,
    setShowAddVoter,
    voterIdRef,
    showEditVoter,
    setShowEditVoter,
    showImportVoters,
    setShowImportVoters
  }

}
export default useVoters;