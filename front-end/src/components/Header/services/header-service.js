import httpMain from "../../../utils/api/httpMain";

const getAuthenticatedUser = async (token) => {
    const response = await httpMain.post(
        `${process.env.REACT_APP_BACKEND_API}/api/admins/auth-admin`,
        { "token": token }
    );
    return response.data;
}

const headerService = {
    getAuthenticatedUser
}

export default headerService;