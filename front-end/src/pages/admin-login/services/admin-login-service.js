import { config } from "../../../config/config";
import axios from "axios";
export const adminLogin = async (values) => {
  const response = await axios.post(
    `${config.BACKEND_API}/api/admins/auth`,
    values
  );
  return response.data;
};
