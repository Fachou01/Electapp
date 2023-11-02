import { useContext } from "react";
import { ElectionContextApp } from "../../../../utils/contexts/ElectionContext";

const useVoterBallot = () => {

  const { election } = useContext(ElectionContextApp);

  return {
    election
  }
}
export default useVoterBallot;