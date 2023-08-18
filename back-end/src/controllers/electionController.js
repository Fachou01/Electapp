const electionService = require("../services/electionService");


const getElections = async (request, response) => {
  try {
    const result = await electionService.getElections();
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const getElectionById = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await electionService.getElectionById(+id);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const getElectionByAdmin = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await electionService.getElectionByAdmin(+id);
    console.log("result",result)
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const addElection = async (request, response) => {
  try {
    const { title, description, status, startDate, endDate, startTime, endTime } = request.body;
    const createdBy = request.user.id;
    const result = await electionService.addElection(title, description, status, startDate, endDate, startTime, endTime, createdBy);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const updateElectionById = async (request, response) => {
  try {
    const { id } = request.params;
    const body = request.body;
    const result = await electionService.updateElectionById(id, body);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const deleteElectionById = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await electionService.deleteElectionById(id);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


module.exports = {
  getElections,
  getElectionById,
  getElectionByAdmin,
  addElection,
  updateElectionById,
  deleteElectionById
};
