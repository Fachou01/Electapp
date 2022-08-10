import { config } from "../../../config/config";
import axios from "axios";
import { removeToken } from "../../../utils/removeToken";

export const adminLogout = async () => {
  removeToken();
};
/*export const adminRegister = async (values) => {
  console.log(values);
  const response = await axios.post(`${config.BACKEND_API}/api/admins`, values);
  return response.data;
};*/
