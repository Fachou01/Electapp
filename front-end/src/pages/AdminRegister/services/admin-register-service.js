import httpMain from "../../../utils/api/httpMain";

export const adminRegister = async (values) => {
  try {
    const response = await httpMain.post("/admins", values);
    return response.data;
  } catch (error) {
    throw error;
  }
};
