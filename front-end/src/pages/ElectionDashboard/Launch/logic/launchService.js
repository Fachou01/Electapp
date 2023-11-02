import httpMain from "../../../../utils/api/httpMain";

export const confirmElectionDetails = async (id) => {
  try {
    const response = await httpMain.get(
      `/elections/confirm-details/${id}`,
    );
    return response;

  } catch (error) {
    throw error;
  }
}


export const launchElection = async (id, data) => {
  try {
    const response = await httpMain.put(
      `/elections/launch/${id}`,
      data
    );
    return response;

  } catch (error) {
    throw error;
  }
}

