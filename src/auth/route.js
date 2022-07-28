import express from "express";
import { authorize } from "../utils/middlewares.js";
import {authentication} from "./controller.js"

const router = express.Router();

router.post('/',authentication);

export default router;