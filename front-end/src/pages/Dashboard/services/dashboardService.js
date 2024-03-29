import { removeToken } from "../../../utils/removeToken";
import httpMain from "../../../utils/api/httpMain";

export const adminLogout = async () => {
  removeToken();
};

export const getElectionsByAdmin = async () => {
  try {
    const response = await httpMain.get(
      "/elections/admin",
    );
    return response.data;

  } catch (error) {
    throw error;
  }
}

export const addElection = async (values) => {
  try {
    const response = await httpMain.post(
      "/elections",
      values
    );
    return response.data;

  } catch (error) {
    throw error;
  }

};
