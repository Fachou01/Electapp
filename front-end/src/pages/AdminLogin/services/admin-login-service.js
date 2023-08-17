import httpMain from "../../../utils/api/httpMain";

export const adminLogin = async (values) => {
  try {
    const response = await httpMain.post(
      "/admins/login",
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
