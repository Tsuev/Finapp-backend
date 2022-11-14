import { Router } from "express";
import { addUsers, getUsers } from "../controllers/UserController.js";


const router = Router();

router.get('/', getUsers);
router.post('/add', addUsers)

export default router;