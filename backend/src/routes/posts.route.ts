import { Router } from "express";
import {
  getPostBySlugHandler,
  getXPostsBySlugHandler,
} from "../controllers/posts.controller";
import { blogViewLimiter } from "../middleware/rateLimiter";

//post routes

const postsRoutes = Router();

postsRoutes.get("/", blogViewLimiter, getXPostsBySlugHandler);
postsRoutes.get("/:slug", blogViewLimiter, getPostBySlugHandler);

export default postsRoutes;
