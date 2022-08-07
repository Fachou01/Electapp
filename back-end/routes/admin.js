const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.post("/auth", adminController.authAdmin);

router.get("/", adminController.getAdmins);

router.get("/:id", adminController.getAdminById);

router.post("/", adminController.addAdmin);

router.put("/:id", adminController.updateAdminById);

router.delete("/:id", adminController.deleteAdminById);

module.exports = router;
