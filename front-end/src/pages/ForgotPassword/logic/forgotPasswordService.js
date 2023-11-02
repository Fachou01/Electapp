import httpMain from "../../../utils/api/httpMain";

export const forgotPassword = async (email) => {
  try {
    const response = await httpMain.post("/admins/forgot-password", {
      email: email
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
