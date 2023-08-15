const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addQuestion = async (title, description, electionId) => {
  try {
    const election = await prisma.election.findFirst({
      where: {
        id: electionId,
      },
    });
    if (!election) return {
      statusCode: 400,
      payload: {
        message: "Bad request"
      }
    }
    const question = {
      title,
      description,
      electionId
    }

    const createdQuestion = await prisma.question.create({ data: question });
    if (createdQuestion) {
      return {
        statusCode: 201,
        payload: {
          message: "Question created"
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
    throw ("Error addQuestion");
  }
}

const deleteQuestionById = async (id) => {
  try {
    const question = await prisma.question.delete({
      where: {
        id: id,
      },
    });
    if (question) return {
      statusCode: 200,
      payload: {
        message: "Question successfully deleted"
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
    throw ("Error deleteQuestionById");
  }
}


module.exports = {
  addQuestion,
  deleteQuestionById
}