const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
}


const comparePassword = async (password, hashedPassword) => {
  try {
    const verifyPassword = await bcrypt.compare(password, hashedPassword);
    return verifyPassword;
  } catch (error) {
    throw error;
  }
}


const generateToken = (payload, key) => {
  try {
    const generatedToken = jwt.sign(payload, key);
    return generatedToken;
  } catch (error) {
    throw error;
  }
}


const decodeToken = (token) => {
  try {
    const decodedToken = jwt.decode(token);
    return decodedToken;
  } catch (error) {
    throw error;
  }
}




module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  decodeToken
}