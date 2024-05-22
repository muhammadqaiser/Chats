import express from "express";
import protectRoute from "../middleware/protect.js";
import { getUserForSideBar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/",getUserForSideBar);

export default router;