import { Router } from "express";
import { addUsers, getUsers } from "../controllers/UserController.js";


const router = Router();

router.get('/users', getUsers);
router.post('/add-user', addUsers)

export default router;