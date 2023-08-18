const prisma = require("../config/prismaInstance");


const getVoters = async () => {
	try {
		const voters = await prisma.voter.findMany({});
		if (voters.length) return {
			statusCode: 200,
			payload: voters
		}
		return {
			statusCode: 204,
			payload: {
				message: "Voters not found"
			}
		}
	} catch (error) {
		console.log("Error in getVoters");
		throw error;
	}
};


const getVoterById = async (id) => {
	try {
		const voter = await prisma.voter.findFirst({
			where: {
				id: id,
			}
		});
		if (voter) return {
			statusCode: 200,
			payload: voter
		}
		return {
			statusCode: 204,
			payload: {
				message: "Voter not found"
			}
		}
	} catch (error) {
		console.log("Error in getVoterById");
		throw error;
	}
};


const addVoter = async (name, email, voterId, key) => {
	try {
		// Find the Voter with the given email or voterId
		const voter = await prisma.voter.findFirst({
			where: {
				OR: [
					{
						email: email
					},
					{
						voterId: voterId
					}
				]
			}
		});
		// Voter exist
		if (voter) return {
			statusCode: 200,
			payload: {
				message: "Voter already exist"
			}
		}
		const createdVoter = await prisma.voter.create({
			data: {
				name,
				email,
				voterId,
				key
			},
		});
		if (createdVoter) return {
			statusCode: 200,
			payload: {
				message: "Voter successfully created"
			}
		}
		return {
			statusCode: 400,
			payload: {
				message: "Bad request"
			}
		}

	} catch (error) {
		console.log("Error in addVoter");
		throw error;
	}
};



const bulkCreateVoters = async (voters) => {
	try {
		const createdVoters = await prisma.voter.createMany({
			data: voters
		});
		if (createdVoters) return {
			statusCode: 200,
			payload: {
				message: "Voters successfully created"
			}
		}
		return {
			statusCode: 400,
			payload: {
				message: "Bad request"
			}
		}

	} catch (error) {
		console.log("Error in bulkCreateVoters");
		throw error;
	}
};

const updateVoterById = async (id, data) => {
	try {
		const updatedVoter = await prisma.voter.update({
			where: {
				id: id,
			},
			data: data,
		});
		if (updatedVoter) return {
			statusCode: 200,
			payload: {
				message: "Voter successfully updated"
			}
		}
		return {
			statusCode: 400,
			payload: {
				message: "Bad request"
			}
		}

	} catch (error) {
		console.log("Error in updateVoterById");
		throw error;
	}
};


const deleteVoterById = async (id) => {
	try {
		const voter = await prisma.voter.delete({
			where: {
				id: id,
			},
		});
		if (voter) return {
			statusCode: 200,
			payload: {
				message: "Voter successfully deleted"
			}
		}
		return {
			statusCode: 400,
			payload: {
				message: "Bad request"
			}
		}
	} catch (error) {
		console.log("Error in deleteVoterById");
		throw error;
	}
};


module.exports = {
	getVoters,
	getVoterById,
	addVoter,
	bulkCreateVoters,
	updateVoterById,
	deleteVoterById
}

