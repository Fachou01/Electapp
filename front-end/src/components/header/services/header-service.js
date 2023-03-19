import { config } from "../../../config/config";
import axios from "axios";

const getAuthenticatedUser = async (token) => {
    const response = await axios.post(
        `${config.BACKEND_API}/api/admins/auth-admin`,
        { "token": token }
    );
    return response.data;
}

const headerService = {
    getAuthenticatedUser
}

export default headerService