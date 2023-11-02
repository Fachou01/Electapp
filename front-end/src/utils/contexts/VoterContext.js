import { createContext, useState } from "react";

export const VoterContextApp = createContext();

const VoterContext = ({ children }) => {

  const [authenticatedUser, setAuthenticatedUser] = useState();

  const providerValue = {
    authenticatedUser,
    setAuthenticatedUser
  }

  return (
    <VoterContextApp.Provider value={providerValue}>
      {children}
    </VoterContextApp.Provider>
  )
}
export default VoterContext;