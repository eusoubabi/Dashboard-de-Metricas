import { Router } from "express";
import { fetchDashboard, fetchColumnsAndValues } from "../controllers/monday.controller";

const router = Router();

router.get("/dashboard/:boardId", fetchDashboard);
router.get("/dashboard/:boardId/columns", fetchColumnsAndValues);

export default router;
