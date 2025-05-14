import { Router } from "express";
import { getPostBySlugHandler } from "../controllers/posts.controller";

const postsRoutes = Router();

postsRoutes.get("/:slug", getPostBySlugHandler);

export default postsRoutes;
