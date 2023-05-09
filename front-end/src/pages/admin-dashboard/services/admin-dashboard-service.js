import { removeToken } from "../../../utils/removeToken";
import httpMain from "../../../utils/api/httpMain";

export const adminLogout = async () => {
  removeToken();
};

export const getElectionsByAdmin = async () => {
  
  const response = await httpMain.get(
    `${process.env.REACT_APP_BACKEND_API}/api/elections/admin`,
  );
  return response.data;
};

export const addElection = async (values) => {

  const response = await httpMain.post(
    `${process.env.REACT_APP_BACKEND_API}/api/elections`,
    values
  );
  return response.data;
};
