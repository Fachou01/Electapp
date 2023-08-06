import { useContext, useEffect } from "react"
import { ElectionContextApp } from "../../../utils/contexts/ElectionContext"
import { useParams } from "react-router-dom";
import ElectionDashboardService from "./electionDashboardService";

const useElectionDashboard = () => {

  const { election, setElection } = useContext(ElectionContextApp);
  const { id } = useParams();

  const getElectionById = async () => {
    try {
      const election = await ElectionDashboardService.getElectionById(id);
      console.log(election);
      if (election) setElection(election);
      else console.log("Error occured");
    } catch (error) {
      console.error("Error in GetElectionById API", error);
    }
  }

  useEffect(() => {
    getElectionById();
  }, [])

  return {
    election
  }
}
export default useElectionDashboard;