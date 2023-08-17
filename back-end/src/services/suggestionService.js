const prisma = require("../config/prismaInstance");


const getSuggestions = async () => {
  try {
    const suggestions = await prisma.suggestion.findMany({});
    if (suggestions.length) return {
      statusCode: 200,
      payload: suggestions
    }
    return {
      statusCode: 204,
      payload: {
        message: "Suggestions not found"
      }
    }
  } catch (error) {
    console.log("Error getSuggestions");
    throw error;
  }
};


const addSuggestion = async (title, description, questionId) => {
  try {
    const question = await prisma.question.findFirst({
      where: {
        id: questionId,
      },
    });
    if (!question) throw "Question not found";

    const suggestion = {
      title,
      description,
      questionId
    }
    const createdSuggestion = await prisma.suggestion.create({ data: suggestion });
    if (createdSuggestion) return {
      statusCode: 200,
      payload: {
        message: "Suggestion successfully created"
      }
    }
    return {
      statusCode: 400,
      payload: {
        message: "Bad request"
      }
    }

  } catch (error) {
    console.log("Error addSuggestion");
    throw error;
  }
}


const bulkCreateSuggestion = async (suggestions, questionId) => {
  try {
    const question = await prisma.question.findFirst({
      where: {
        id: questionId,
      },
    });
    if (!question) return {
      statusCode: 400,
      payload: {
        message: "Bad request"
      }
    }

    // BULK CREATE OR UPDATE SUGGESTIONS
    let suggestionsCreated = true;
    for (const suggestion of suggestions) {
      let { id, ...suggestionToInsert } = suggestion;
      // IF THE SUGGESTION IS NEWLY CREATED 
      if (isNaN(id)) id = -1;

      const createdSuggestion = await prisma.suggestion.upsert({
        where: { id: +id },
        update: suggestionToInsert,
        create: suggestionToInsert
      })
      if (!createdSuggestion) suggestionsCreated = false;
    }

    if (suggestionsCreated) {
      return {
        statusCode: 201,
        payload: {
          message: "Suggestions successfully created"
        }
      }
    }
    return {
      statusCode: 400,
      payload: {
        message: "Bad request"
      }
    }
  } catch (error) {
    console.log("Error bulkCreateSuggestion");
    throw error;
  }
}


module.exports = {
  getSuggestions,
  addSuggestion,
  bulkCreateSuggestion
}