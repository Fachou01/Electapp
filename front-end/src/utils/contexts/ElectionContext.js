import { createContext, useState } from "react";

export const ElectionContextApp = createContext();

const ElectionContext = ({ children }) => {

  const [election, setElection] = useState();

  const providerValue = {
    election,
    setElection
  }

  return (
    <ElectionContextApp.Provider value={providerValue}>
      {children}
    </ElectionContextApp.Provider>
  )
}
export default ElectionContext;