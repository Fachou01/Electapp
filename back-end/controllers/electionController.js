const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getElections = async (req, res) => {
  try {
    const elections = await prisma.election.findMany({});
    res.status(200).json(elections);
  } catch (error) {
    res.send("Error get elections");
  }
};

const getElectionById = async (req, res) => {
  const id = req.params.id;
  try {
    const election = await prisma.election.findFirst({
      where: {
        id: +id,
      },
    });
    res.status(200).json(election);
  } catch (error) {
    res.send("Error get electionById");
  }
};

//////////////////////////////////////////////
const addElection = async (req, res) => {
  const { title, description, status, adminId } = req.body;
  const startDate = new Date(req.body.startDate);
  const endDate = new Date(req.body.endDate);
  try {
    //add new election
    const newElection = await prisma.election.create({
      data: {
        title,
        description,
        status,
        startDate,
        endDate,
        adminId,
      },
    });
    res.status(201).json(newElection);
  } catch (error) {
    console.log(error);
    res.send("Error creating election");
  }
};

const updateElectionById = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedElection = await prisma.election.update({
      where: {
        id: +id,
      },
      data: body,
    });
    res.status(200).json(updatedElection);
  } catch (error) {
    res.send("Error update electionById");
  }
};

const deleteElectionById = async (req, res) => {
  const { id } = req.params;
  try {
    const election = await prisma.election.delete({
      where: {
        id: +id,
      },
    });
    res.status(200).json(election);
  } catch (error) {
    res.send("Error delete electionById");
  }
};

module.exports = {
  getElections,
  getElectionById,
  addElection,
  updateElectionById,
  deleteElectionById,
};
