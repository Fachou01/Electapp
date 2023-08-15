const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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
      if(isNaN(id)) id = -1;
      
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
          message: "Suggestions created"
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
    console.log(error);
    throw ("Error bulkCreateSuggestion");
  }
}


module.exports = {
  bulkCreateSuggestion
}