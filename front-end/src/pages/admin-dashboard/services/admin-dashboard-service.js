import { config } from "../../../config/config";
import axios from "axios";
import { removeToken } from "../../../utils/removeToken";
import { getTokenValue } from "../../../utils/getToken";

// INTERCEPTOR
let token = getTokenValue();
token = token.replace(/['"]+/g, "");
const header = {
  headers: { Authorization: `Bearer ${token}` },
};

export const adminLogout = async () => {
  removeToken();
};
export const getElections = async () => {
  const response = await axios.get(
    `${config.BACKEND_API}/api/elections`,
    header
  );
  return response.data;
};
