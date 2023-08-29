import httpMain from '../../../../utils/api/httpMain';


export const getAllVoters = async () => {
  try {
    const response = await httpMain.get(`/voters`);
    return response;
  } catch (error) {
    throw error;
  }
};


export const getVoterById = async (id) => {
  try {
    const response = await httpMain.get(`/voters/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};


export const addVoter = async (values) => {
  try {
    const response = await httpMain.post(`/voters`, values);
    return response;
  } catch (error) {
    throw error;
  }
};


export const bulkCreatVoters = async (file) => {
  try {
    const formData = new FormData();
    formData.append("filee", file);
    const response = await httpMain.post(`/voters/bulk`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
}


export const editVoter = async (id, values) => {
  try {
    const response = await httpMain.put(`/voters/${id}`, values);
    return response;
  } catch (error) {
    throw error;
  }
};


const votersService = {
  getAllVoters,
  getVoterById,
  addVoter,
  bulkCreatVoters,
  editVoter
}


export default votersService;