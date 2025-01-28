import express from "express";
import APIController from "../controllers/apiController.js";

const router = express.Router();

router.get("/info", (req, res) => APIController.getInfo(req, res));

export default router;
