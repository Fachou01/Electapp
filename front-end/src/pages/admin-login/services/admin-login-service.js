import httpMain from "../../../utils/api/httpMain";

export const adminLogin = async (values) => {
  const response = await httpMain.post(
    `${process.env.REACT_APP_BACKEND_API}/api/admins/auth`,
    values
  );
  return response.data;
};
