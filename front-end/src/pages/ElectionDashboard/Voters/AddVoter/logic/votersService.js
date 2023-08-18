import httpMain from "../../../../../utils/api/httpMain";


export const addVoter = async (values) => {
  try {
    const response = await httpMain.post(`/voters`, values);
    return response;
  } catch (error) {
    throw error;
  }
};

const votersService = {
  addVoter
}

export default votersService;