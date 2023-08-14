import httpMain from "../../../../../../utils/api/httpMain";

export const addQuestion = async (question) => {
  try {
    const response = await httpMain.post(
      "/questions",
      question
    );
    return response;

  } catch (error) {
    throw error;
  }
};


const addQuestionService = {
  addQuestion
}

export default addQuestionService;