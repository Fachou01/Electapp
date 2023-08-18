const prisma = require("../config/prismaInstance");
const dayjs = require('dayjs');


const getElections = async () => {
  try {
    let elections = await prisma.election.findMany({});
    if (elections.length) {
      elections = elections.map(election => {
        election.startDate = dayjs(election.startDate).format('YYYY-MM-DD');
        election.endDate = dayjs(election.endDate).format('YYYY-MM-DD');
        return election;
      })
      return {
        statusCode: 200,
        payload: elections
      }
    }
    return {
      statusCode: 204,
      payload: {
        message: "Elections not found"
      }
    }
  } catch (error) {
    console.log("Error in getElections");
    throw error;
  }
};


const getElectionById = async (id) => {
  try {
    const election = await prisma.election.findFirst({
      where: {
        id: id,
      },
    });
    if (election) return {
      statusCode: 200,
      payload: election
    }

    return {
      statusCode: 204,
      payload: {
        message: "Election not found"
      }
    }
  } catch (error) {
    console.log("Error in getElectionById");
    throw error;
  }
};


const getElectionByAdmin = async (id) => {
  try {
    const election = await prisma.election.findMany({
      where: {
        adminId: id,
      },
    });
    if (election) return {
      statusCode: 200,
      payload: election
    }

    return {
      statusCode: 204,
      payload: {
        message: "Election not found"
      }
    }
  } catch (error) {
    console.log("Error in getElectionById");
    throw error;
  }
}


const addElection = async (title, description, status, startDate, endDate, startTime, endTime, createdBy) => {
  try {
    const defaultStatus = "PENDING";
    const formattedStartDate = new Date(`${startDate} ${startTime}`);
    const formattedEndDate = new Date(`${endDate} ${endTime}`);
    const adminId = createdBy;

    const createdElection = await prisma.election.create({
      data: {
        title,
        description,
        status: defaultStatus,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        adminId,
      }
    });
    if (createdElection) return {
      statusCode: 200,
      payload: createdElection
    }

    return {
      statusCode: 400,
      payload: {
        message: "Bad request"
      }
    }
  } catch (error) {
    console.log("Error in addElection");
    throw error;
  }
};


const updateElectionById = async (id, data) => {
  try {
    const updatedElection = await prisma.election.update({
      where: {
        id: +id
      },
      data: data
    });
    if (updatedElection) return {
      statusCode: 200,
      payload: {
        message: "Election successfully updated"
      }
    }

    return {
      statusCode: 400,
      payload: {
        message: "Bad request"
      }
    }
  } catch (error) {
    console.log("Error in updateElectionById");
    throw error;
  }
};


const deleteElectionById = async (id) => {
  try {
    const election = await prisma.election.delete({
      where: {
        id: +id,
      },
    });
    if (election) return {
      statusCode: 200,
      payload: {
        message: "Election successfully deleted"
      }
    }
    return {
      statusCode: 400,
      payload: {
        message: "Bad request"
      }
    }
  } catch (error) {
    console.log("Error in deleteElectionById");
    throw error;
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
