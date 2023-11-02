import httpMain from '../../../../utils/api/httpMain';


export const getAllVoters = async () => {
  try {
    const response = await httpMain.get(`/voters`);
    return response;
  } catch (error) {
    throw error;
  }
};


export const getAllVotersByElection = async (electionId) => {
  try {
    const response = await httpMain.get(`/voters/election/${electionId}`);
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


export const addVoter = async (values, electionId) => {
  try {
    const response = await httpMain.post(`/voters`, {
      ...values,
      electionId
    });
    return response;
  } catch (error) {
    throw error;
  }
};


export const bulkCreateVoters = async (file, electionId) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await httpMain.post(`/voters/bulk/${electionId}`, formData, {
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
  getAllVotersByElection,
  getVoterById,
  addVoter,
  bulkCreateVoters,
  editVoter
}


export default votersService;