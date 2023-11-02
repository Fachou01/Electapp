import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import voterDashoardService from "../../logic/voterDashoardService";
import { useContext } from "react";
import { ElectionContextApp } from "../../../../utils/contexts/ElectionContext";

const useVoterElection = () => {
  const { id: electionUrl } = useParams();

  const { election, setElection } = useContext(ElectionContextApp);

  const { isLoading: isElectionLoading, error: electionError, data: electionData } = useQuery(
    ["electionVote"],
    () => voterDashoardService.getElectionByUrl(electionUrl, true),
    {
      onSuccess: (electionData) => {
        console.log("electionError", electionError)
        if(electionData) setElection(electionData);
      }
    }
  );

  console.log("electionData", electionData)
  return {
    isElectionLoading,
    electionError,
    electionData,
    election
  }
}
export default useVoterElection;