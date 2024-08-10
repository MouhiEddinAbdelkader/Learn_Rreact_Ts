import express from "express";
import {
  authUser,
  registerUser,

} from "../controller/userController";

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin);
router.route("/login").post(authUser);

export default router;