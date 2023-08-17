import { useState } from "react";

const useVoters = () => {

  const [showAddVoter, setShowAddVoter] = useState(false);


  return {
    showAddVoter,
    setShowAddVoter,
  }

}
export default useVoters;