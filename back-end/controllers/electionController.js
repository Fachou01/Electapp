const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const dayjs = require('dayjs');

const getElections = async (req, res) => {
  try {
    let elections = await prisma.election.findMany({});
    elections = elections.map(election => {
      election.startDate = dayjs(election.startDate).format('YYYY-MM-DD HH:mm');
      election.endDate = dayjs(election.endDate).format('YYYY-MM-DD HH:mm');
      return election;
    })
    res.status(200).json(elections);
  } catch (error) {
    res.send("Error get elections");
  }
};

const getElectionsByAdmin = async (req, res) => {

  const { id } = req.user;
  try {
    let elections = await prisma.election.findMany({
      where: {
        adminId: +id
      }
    });
    elections = elections.map(election => {
      election.startDate = dayjs(election.startDate).format('YYYY-MM-DD HH:mm');
      election.endDate = dayjs(election.endDate).format('YYYY-MM-DD HH:mm');
      return election;
    })
    return res.status(200).json(elections);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error getElectionsByAdminId");
  }
};

const getElectionById = async (req, res) => {
  const id = req.params.id;
  try {
    const election = await prisma.election.findFirst({
      where: {
        id: +id,
      },
      include: {
      questions: true
    }
    });

    if (election) {
      election.startDate = dayjs(election.startDate).format('YYYY-MM-DD HH:mm');
      election.endDate = dayjs(election.endDate).format('YYYY-MM-DD HH:mm');
      return res.status(200).json(election);
    }

    return res.status(204).json(election);

  } catch (error) {
    return res.status(400).send("Error get electionById");
  }
};

//////////////////////////////////////////////
const addElection = async (req, res) => {
  const { title, description, status, startTime, endTime } = req.body;
  const startDate = new Date(`${req.body.startDate} ${startTime}`);
  const endDate = new Date(`${req.body.endDate} ${endTime}`);
  const adminId = req.user.id;
  const defaultStatus = "PENDING";
  // const startDate = new Date(req.body.startDate);
  // const endDate = new Date(req.body.endDate);
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
        status: defaultStatus
      },
    });
    if (newElection) return res.status(201).json(newElection);
    return res.status(400).send("Bad Request");

  } catch (error) {
    console.log(error);
    return res.status(400).send("Error creating election");
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
  getElectionsByAdmin,
  getElectionById,
  addElection,
  updateElectionById,
  deleteElectionById
};
