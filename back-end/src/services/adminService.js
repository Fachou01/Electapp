const { generateToken, comparePassword, decodeToken, hashPassword } = require("../helpers/utils");
const prisma = require("../config/prismaInstance");


const authAdmin = async (email, password) => {
  try {
    const admin = await prisma.admin.findFirst({
      where: {
        email: email,
      },
    });
    if (!admin) return {
      statusCode: 400,
      payload: {
        message: "Email or password are invalid"
      }
    }
    const verifyPassword = await comparePassword(password, admin.password);
    if (!verifyPassword) return {
      statusCode: 400,
      payload: {
        message: "Email or password are invalid"
      }
    }
    const payload = {
      id: admin.id,
      name: admin.name,
    };

    const token = generateToken(payload, process.env.SECRET_KEY);
    if (token) return {
      statusCode: 200,
      payload: {
        token: token
      }
    }

    return {
      statusCode: 400,
      payload: {
        message: "Bad request"
      }
    }
  } catch (error) {
    console.log("Error in authAdmin");
    throw error;
  }
};


const getAdmins = async () => {
  try {
    const admins = await prisma.admin.findMany({});
    if (admins.length) {
      return {
        statusCode: 200,
        payload: admins
      }
    }
    return {
      statusCode: 204,
      payload: {
        message: "Admins not found"
      }
    }
  } catch (error) {
    console.log("Error in getAdmins");
    throw error;
  }
};


const getAdminById = async (id) => {
  try {
    const admin = await prisma.admin.findFirst({
      where: {
        id: id,
      },
    });
    if (admin) {
      return {
        statusCode: 200,
        payload: admin
      }
    }
    return {
      statusCode: 204,
      payload: {
        message: "Admin not found"
      }
    }
  } catch (error) {
    console.log("Error in getAdminById");
    throw error;
  }
};


const getAuthenticatedAdmin = async (token) => {
  try {
    const decodedToken = decodeToken(token);
    const { id } = decodedToken;
    if (id) {
      const admin = await prisma.admin.findFirst({
        where: {
          id: id,
        },
      });
      if (admin) {
        return {
          statusCode: 200,
          payload: admin
        }
      }
      return {
        statusCode: 204,
        payload: {
          message: "Admin not found"
        }
      }
    }
  } catch (error) {
    console.log("Error in getAuthenticatedAdmin");
    throw error;
  }
};


const addAdmin = async (name, email, password) => {
  try {
    //Find the admin with the given email
    const admin = await prisma.admin.findFirst({
      where: {
        email: email,
      },
    });
    if (admin) return {
      statusCode: 200,
      payload: {
        message: "User already exist"
      }
    }
    //hash password
    const hashedPassword = await hashPassword(password);
    //add new admin
    const newAdmin = await prisma.admin.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    if (newAdmin) return {
      statusCode: 201,
      payload: {
        message: "Admin successfully created"
      }
    }
    return {
      statusCode: 400,
      payload: {
        message: "Bad request"
      }
    }
  } catch (error) {
    console.log("Error in addAdmin");
    throw error;
  }
};


const updateAdminById = async (id, data) => {
  try {
    const updatedAdmin = await prisma.admin.update({
      where: {
        id: id,
      },
      data: data,
    });
    if (updatedAdmin) return {
      statusCode: 200,
      payload: {
        message: "Admin successfully updated"
      }
    }
    return {
      statusCode: 400,
      payload: {
        message: "Bad request"
      }
    }

  } catch (error) {
    console.log("Error in updateAdminById");
    throw error;
  }
};


const deleteAdminById = async (id) => {
  try {
    const admin = await prisma.admin.delete({
      where: {
        id: id,
      },
    });
    if (admin) return {
      statusCode: 200,
      payload: {
        message: "Admin successfully deleted"
      }
    }
    return {
      statusCode: 400,
      payload: {
        message: "Bad request"
      }
    }
  } catch (error) {
    console.log("Error in deleteAdminById");
    throw error;
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
}

