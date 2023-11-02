import httpMain from "../../../utils/api/httpMain";

export const resetPassword = async (password, confirmPassword, resetToken) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${resetToken}`
      }
    }
    const response = await httpMain.post("/admins/reset-password", {
      password: password,
      confirmPassword: confirmPassword
    },
      config
    );
    return response;
  } catch (error) {
    throw error;
  }
};
