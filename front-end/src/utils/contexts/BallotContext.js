import { createContext, useState } from "react";

export const BallotContextApp = createContext();

const BallotContext = ({ children }) => {

  const [election, setElection] = useState();

  const providerValue = {
    election,
    setElection
  }

  return (
    <BallotContextApp.Provider value={providerValue}>
      {children}
    </BallotContextApp.Provider>
  )
}
export default BallotContext;