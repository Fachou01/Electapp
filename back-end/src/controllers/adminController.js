const adminService = require("../services/adminService");


const authAdmin = async (request, response) => {
  try {
    const { email, password } = request.body;
    const result = await adminService.authAdmin(email, password);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};

const getAdmins = async (request, response) => {
  try {
    const result = await adminService.getAdmins();
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const getAdminById = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await adminService.getAdminById(+id);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const getAuthenticatedAdmin = async (request, response) => {
  try {
    const { token } = request.body;
    const result = await adminService.getAuthenticatedAdmin(token);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const addAdmin = async (request, response) => {
  try {
    const { name, email, password } = request.body;
    const result = await adminService.addAdmin(name, email, password);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
}


const updateAdminById = async (request, response) => {
  try {
    const { id } = request.params;
    const body = request.body;
    const result = await adminService.updateAdminById(+id, body);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


const deleteAdminById = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await adminService.deleteAdminById(+id);
    return response.status(result.statusCode).send(result.payload);
  } catch (error) {
    console.log(error);
    return response.status(400).send("Error occured");
  }
};


module.exports = {
  authAdmin,
  getAdmins,
  getAdminById,
  getAuthenticatedAdmin,
  addAdmin,
  updateAdminById,
  deleteAdminById
};
