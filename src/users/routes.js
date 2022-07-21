import express from "express";
import { authorize } from "../utils/middlewares.js";
const router = express.Router();

router.get('/',authorize);


export default router;