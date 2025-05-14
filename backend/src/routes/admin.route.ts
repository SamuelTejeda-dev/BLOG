import { Router } from "express";
import { postHandler } from "../controllers/admin.controller";
import { adminCheck } from "../middleware/adminCheck";

const adminRoutes = Router();

adminRoutes.post("/", adminCheck, postHandler);

export default adminRoutes;
