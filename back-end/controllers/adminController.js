const getAdmins = (req, res) => {
  res.send("het");
};

const getAdminById = (req, res) => {
  const id = req.params.id;
  res.send(id);
};

const addAdmin = (req, res) => {};

const updateAdminById = (req, res) => {};

const deleteAdminById = (req, res) => {};

module.exports = {
  getAdmins,
  getAdminById,
  addAdmin,
  updateAdminById,
  deleteAdminById,
};
