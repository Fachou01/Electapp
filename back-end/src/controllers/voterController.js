const voterService = require("../services/voterService");


const getVoters = async (request, response) => {
  try {
    const result = await voterService.getVoters();
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const getVoterById = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await voterService.getVoterById(id);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const addVoter = async (request, response) => {
  try {
    const { name, email, voterId, key } = request.body;
    const result = await voterService.addVoter(name, email, voterId, key);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const updateVoterById = async (request, response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await voterService.updateVoterById(id, data);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const deleteVoterById = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await voterService.deleteVoterById(id);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


module.exports = {
  getVoters,
  getVoterById,
  addVoter,
  updateVoterById,
  deleteVoterById
};
