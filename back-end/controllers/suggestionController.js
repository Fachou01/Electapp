const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const suggestionService = require("../services/suggestionService");

const getSuggestions = async (req, res) => {
  try {
    const suggestions = await prisma.suggestion.findMany({});
    if (suggestions.length) {
      return res.status(200).json(suggestions);
    }
    return res.status(204).send("No data found");

  } catch (error) {
    console.log(error);
    return res.status(400).send("Error getSuggestions");
  }
};


const addSuggestion = async (req, res) => {
  try {
    const { title, description, questionId } = req.body;

    const question = await prisma.question.findFirst({
      where: {
        id: questionId,
      },
    });

    if (!question) return res.status(400).send("Bad request");

    const suggestion = {
      title,
      description,
      questionId
    }
    const createdSuggestion = await prisma.suggestion.create({ data: suggestion });
    if (createdSuggestion) {
      return res.status(201).json(createdSuggestion);
    }

    return res.status(400).send("Bad request");

  } catch (error) {
    console.log(error);
    return res.status(400).send("Error addSuggestion");
  }
}

const bulkCreateSuggestion = async (req, res) => {
  try {
    const { suggestions, questionId } = req.body;
    const response = await suggestionService.bulkCreateSuggestion(suggestions, questionId);
    return res.status(response.statusCode).send(response.payload);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error occured");
  }
}

module.exports = {
  getSuggestions,
  addSuggestion,
  bulkCreateSuggestion
};