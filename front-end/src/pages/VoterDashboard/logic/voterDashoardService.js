import httpMain from "../../../utils/api/httpMain";

export const getElectionByUrl = async (url, populate = false) => {
  try {
    const response = await httpMain.get(
      `/elections/url/${url}?populate=${populate}`,

    );
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const voterLogin = async (id, key, electionId) => {
  try {
    const response = await httpMain.post(
      `/voters/login/${electionId}`,
      {
        id,
        key
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};


const voterDashoardService = {
  getElectionByUrl,
  voterLogin
};

export default voterDashoardService;
