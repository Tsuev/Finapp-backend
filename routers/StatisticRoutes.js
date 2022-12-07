import { Router } from "express";
import getStatistic from "../controllers/StatisticController.js";


const router = new Router();

router.get('/statistic', getStatistic)

export default router;
