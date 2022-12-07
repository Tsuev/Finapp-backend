import { Router } from "express";
import { addPayment } from "../controllers/PaymentController.js";


const router = Router();

router.post('/add-sum', addPayment)

export default router;