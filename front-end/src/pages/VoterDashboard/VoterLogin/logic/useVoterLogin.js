import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { voterLogin } from "./voterLoginSchema";
import { useQuery } from "react-query";
import voterDashoardService from "../../logic/voterDashoardService";


const useVoterLogin = () => {

  const navigate = useNavigate();
  const { id: electionUrl } = useParams();

  // const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const initialValues = {
    id: "",
    key: ""
  };

  const { isLoading: isElectionLoading, error: electionError, data: electionData } = useQuery(
    ["electionVote"],
    () => voterDashoardService.getElectionByUrl(electionUrl)
  );

  const onSubmit = async (values) => {
    try {
      console.log("electionData", electionData)
      setError();
      setLoading(true);
      const {id, key } =  values;
      const response = await voterDashoardService.voterLogin(id, key, electionData.id);
      if (response.token) {
        localStorage.setItem("token", JSON.stringify(response.token));
        navigate("../ballot",{ replace: true });
      } else {
        setError("Error occured");
      }
    } catch (error) {
      console.error(error);
      setError("Error occured");
    }
    finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: voterLogin,
    onSubmit
  });

  return {
    isElectionLoading,
    electionError,
    electionData,
    loading,
    error,
    formik
  }
}
export default useVoterLogin;