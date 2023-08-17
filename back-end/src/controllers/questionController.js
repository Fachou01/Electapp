const questionService = require("../services/questionService");


const getQuestions = async (request, response) => {
  try {
    const result = await questionService.getQuestions();
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const getQuestionsByElectionId = async (request, response) => {
  try {
    const { electionId } = request.params;
    const result = await questionService.getQuestionsByElectionId(+electionId);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const addQuestion = async (request, response) => {
  try {
    const { title, description, electionId } = request.body;
    const result = await questionService.addQuestion(title, description, +electionId);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
}


const deleteQuestionById = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await questionService.deleteQuestionById(+id);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error occured");
  }
}


module.exports = {
  getQuestions,
  getQuestionsByElectionId,
  addQuestion,
  deleteQuestionById
};