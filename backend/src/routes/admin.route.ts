import { Router } from "express";
import {
  checkSession,
  loginHandler,
  logoutHandler,
  postHandler,
} from "../controllers/admin.controller";
import { isAdmin } from "../middleware/isAdmin";
import {
  loginRequestLimiter,
  postCreationLimiter,
} from "../middleware/rateLimiter";

//admin routes

const adminRoutes = Router();

adminRoutes.post("/contacts", loginRequestLimiter, loginHandler);
adminRoutes.post("/clear", isAdmin, logoutHandler);
adminRoutes.post("/resources", postCreationLimiter, isAdmin, postHandler);
adminRoutes.get("/check", checkSession);

export default adminRoutes;
