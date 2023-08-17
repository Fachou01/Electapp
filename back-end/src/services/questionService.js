const prisma = require("../config/prismaInstance");


const getQuestions = async () => {
  try {
    const questions = await prisma.question.findMany({});
    if (questions.length) {
      return {
        statusCode: 200,
        payload: questions
      }
    }
    return {
      statusCode: 204,
      payload: {
        message: "Questions not found"
      }
    }
  } catch (error) {
    console.log("Error in getQuestions");
    throw error;
  }
};


const getQuestionsByElectionId = async (electionId) => {
  try {
    const questions = await prisma.question.findMany({
      where: {
        electionId: electionId
      },
      include: {
        suggestions: true
      }
    });
    if (questions.length) {
      return {
        statusCode: 200,
        payload: questions
      }
    }
    return {
      statusCode: 204,
      payload: {
        message: "Questions not found"
      }
    }
  } catch (error) {
    console.log("Error in getQuestionsByElectionId");
    throw error;
  }
};


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
    if (createdQuestion) return {
      statusCode: 201,
      payload: {
        message: "Question successfully created"
      }
    }

    return {
      statusCode: 400,
      payload: {
        message: "Bad request"
      }
    }

  } catch (error) {
    console.log("Error in addQuestion");
    throw (error);
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
    console.log("Error deleteQuestionById");
    throw error;
  }
}


module.exports = {
  getQuestions,
  getQuestionsByElectionId,
  addQuestion,
  deleteQuestionById
}