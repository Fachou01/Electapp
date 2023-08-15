import httpMain from '../../../../utils/api/httpMain';


export const getQuestionsByElectionId = async (electionId) => {
  try {
    const response = await httpMain.get(`/questions/${electionId}`);
    return response;
  } catch (error) {
    throw error;
  }
};


export const deleteQuestionById = async (id) => {
  try {
    const response = await httpMain.delete(`/questions/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};


export const addBulkSuggestions = async (suggestions, questionId) => {
  try {
    const response = await httpMain.post(
      `/suggestions/bulk/${questionId}`,
      { suggestions: suggestions }
    );
    return response;

  } catch (error) {
    throw error;
  }
};


const ballotService = {
  getQuestionsByElectionId,
  deleteQuestionById,
  addBulkSuggestions
}

export default ballotService;