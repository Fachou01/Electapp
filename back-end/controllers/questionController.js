const { PrismaClient } = require("@prisma/client");
const questionService = require("../services/questionService");

const prisma = new PrismaClient();

const getQuestions = async (req, res) => {
  try {
    const questions = await prisma.question.findMany({});
    if (questions.length) {
      return res.status(200).json(questions);
    }
    return res.status(204).send("No data found");

  } catch (error) {
    console.log(error);
    return res.status(400).send("Error getQuestions");
  }
};


const getQuestionsByElectionId = async (req, res) => {
  const { electionId } = req.params;
  try {
    const questions = await prisma.question.findMany({
      where: {
        electionId: +electionId
      },
      include: {
        suggestions: true
      }
    });
    if (questions && questions.length) {
      return res.status(200).json(questions);
    }

    return res.status(400).send("Bad request");

  } catch (error) {
    console.log(error);
    return res.status(400).send("Error get getQuestionsByElectionId");
  }
};


const addQuestion = async (req, res) => {
  try {
    const { title, description, electionId } = req.body;
    const question = {
      title,
      description,
      electionId
    }
    const election = await prisma.election.findFirst({
      where: {
        id: electionId,
      },
    });
    if (!election) return res.status(400).send("Bad request");

    const createdQuestion = await prisma.question.create({ data: question });
    if (createdQuestion) {

      return res.status(201).json({
        status: "Success",
        message: "Question created successfully",
        data: createdQuestion
      });
    }
    return res.status(400).send("Bad request");

  } catch (error) {
    console.log(error);
    return res.status(400).send("Error addQuestion");
  }
}

const deleteQuestionById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await questionService.deleteQuestionById(+id);
    return res.status(response.statusCode).send(response.payload);
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