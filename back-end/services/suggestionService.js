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

    const createdSuggestions = await prisma.suggestion.createMany({
      data: suggestions
    })
    console.log("createdSuggestions",createdSuggestions);
    if (createdSuggestions) {
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