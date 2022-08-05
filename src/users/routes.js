import express from "express";
import {saveUser,fetchUser,fetchUsers,editUserDetails} from "./controllers.js"
import { authorize } from "../utils/middlewares.js";
const router = express.Router();

router.post('/',authorize,saveUser);
router.put('/',authorize,editUserDetails);
router.get('/',authorize,fetchUsers);
router.get('/:userId',authorize,fetchUser);



export default router;