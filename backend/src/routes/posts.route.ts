import { Router } from "express";
import {
  getPostByIdHandler,
  getPostBySlugHandler,
  getXPostsHandler,
} from "../controllers/posts.controller";
import { blogViewLimiter } from "../middleware/rateLimiter";

//post routes

const postsRoutes = Router();

postsRoutes.get("/latest", blogViewLimiter, getXPostsHandler);
postsRoutes.get("/id/:id", blogViewLimiter, getPostByIdHandler);
postsRoutes.get("/slug/:slug", blogViewLimiter, getPostBySlugHandler);

export default postsRoutes;
