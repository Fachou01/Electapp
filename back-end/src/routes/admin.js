const express = require("express");
const passport = require("passport");
const adminController = require("../controllers/adminController");

const router = express.Router();

router.post("/login", adminController.authAdmin);

router.get("/", passport.authenticate("jwt", { session: false }), adminController.getAdmins);
router.get("/:id", passport.authenticate("jwt", { session: false }), adminController.getAdminById);
router.post("/auth-admin", passport.authenticate("jwt", { session: false }), adminController.getAuthenticatedAdmin);
router.post("/", passport.authenticate("jwt", { session: false }), adminController.addAdmin);
router.put("/:id", passport.authenticate("jwt", { session: false }), adminController.updateAdminById);
router.delete("/:id", passport.authenticate("jwt", { session: false }), adminController.deleteAdminById);


module.exports = router;
