import { createContext, useState } from "react";

export const AuthContextApp = createContext();

const AuthContext = ({children}) => {

  const [authenticatedUser, setAuthenticatedUser] = useState();

  const providerValue = {
    authenticatedUser,
    setAuthenticatedUser
  }

  return (
    <AuthContextApp.Provider value={providerValue}>
      {children}
    </AuthContextApp.Provider>
  )
}
export default AuthContext;