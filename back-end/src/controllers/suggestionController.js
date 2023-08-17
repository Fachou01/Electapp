const suggestionService = require("../services/suggestionService");


const getSuggestions = async (request, response) => {
  try {
    const result = await suggestionService.getSuggestions();
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const addSuggestion = async (request, response) => {
  try {
    const { title, description, questionId } = request.body;
    const result = await suggestionService.addSuggestion(title, description, +questionId);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
}


const bulkCreateSuggestion = async (request, response) => {
  try {
    const { questionId } = request.params;
    const { suggestions } = request.body;
    const result = await suggestionService.bulkCreateSuggestion(suggestions, +questionId);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
}


module.exports = {
  getSuggestions,
  addSuggestion,
  bulkCreateSuggestion
};