const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

const authAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await prisma.admin.findFirst({
      where: {
        email: email,
      },
    });
    if (!admin) return res.status(200).send("Email or password are invalid");
    const verifyPassword = await bcrypt.compare(password, admin.password);
    console.log(verifyPassword);
    if (verifyPassword == false)
      return res.status(200).send("Email or password are invalid");
    const payload = {
      id: admin.id,
      name: admin.name,
    };
    const jwtToken = jwt.sign(payload, process.env.SECRET_KEY);
    return res.status(202).json({
      token: jwtToken,
    });
  } catch (error) {
    res.send("Error auth admin");
  }
};

const getAdmins = async (req, res) => {
  try {
    const admins = await prisma.admin.findMany({});
    res.status(200).json(admins);
  } catch (error) {
    res.send("Error get admins");
  }
};

const getAdminById = async (req, res) => {
  const id = req.params.id;
  try {
    const admin = await prisma.admin.findFirst({
      where: {
        id: +id,
      },
    });
    res.status(200).json(admin);
  } catch (error) {
    res.send("Error get adminById");
  }
};

const addAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  //find the admin with the given email
  try {
    const admin = await prisma.admin.findFirst({
      where: {
        email: email,
      },
    });
    //if admin exist
    if (admin) res.send("User already exist !");
    else {
      try {
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        //add new admin
        const newAdmin = await prisma.admin.create({
          data: {
            name,
            email,
            password: hashedPassword,
          },
        });
        res.status(201).json(newAdmin);
      } catch (error) {
        res.send("Error creating user");
      }
    }
  } catch (error) {
    res.send("Error");
  }

  //add to db
};

const updateAdminById = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedAdmin = await prisma.admin.update({
      where: {
        id: +id,
      },
      data: body,
    });
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.send("Error update adminById");
  }
};

const deleteAdminById = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await prisma.admin.delete({
      where: {
        id: +id,
      },
    });
    res.status(200).json(admin);
  } catch (error) {
    res.send("Error delete adminById");
  }
};

module.exports = {
  authAdmin,
  getAdmins,
  getAdminById,
  addAdmin,
  updateAdminById,
  deleteAdminById,
};
