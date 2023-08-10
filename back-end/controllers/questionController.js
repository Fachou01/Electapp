const { PrismaClient } = require("@prisma/client");
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

module.exports = {
  getQuestions,
  addQuestion
};