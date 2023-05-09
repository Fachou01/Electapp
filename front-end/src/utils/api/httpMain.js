import axios from "axios";
import { getTokenValue } from "../getToken";

const httpMain = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API
});

httpMain.interceptors.request.use((config) => {
    const accessToken = getTokenValue();
    if (accessToken) {
        config.headers['Authorization'] = `bearer ${accessToken}`
    }
    return config;
},
    error => {
        Promise.reject(error)
    }
)

export default httpMain;


