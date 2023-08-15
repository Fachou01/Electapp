import httpMain from "../../../utils/api/httpMain";

export const adminLogin = async (values) => {
  try {
    const response = await httpMain.post(
      "/admins/auth",
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
