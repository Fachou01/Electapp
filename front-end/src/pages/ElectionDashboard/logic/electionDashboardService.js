import httpMain from "../../../utils/api/httpMain";

export const getElectionById = async (id) => {
  try {
    const response = await httpMain.get(
      `/elections/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getElectionStats = async (id) => {
  try {
    const response = await httpMain.get(
      `/elections/${id}/stats`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const ElectionDashboardService = {
  getElectionById,
  getElectionStats
};

export default ElectionDashboardService;
