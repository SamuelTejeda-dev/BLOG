import { NOT_FOUND, OK } from "../constants/http";
import appAssert from "../utils/AppAssert";
import catchErrors from "../utils/catchErrors";
import { getPostBySlug, getXPosts, getPostById } from "../utils/posts";

export const getXPostsHandler = catchErrors(async (_, res) => {
  const posts = await getXPosts(9);
  appAssert(posts.length !== 0, NOT_FOUND, "Non ci sono altri post");

  res.status(OK).json(posts);
});

export const getPostBySlugHandler = catchErrors(async (req, res) => {
  const slug = req.params.slug;

  const post = await getPostBySlug(slug);
  appAssert(post, NOT_FOUND, "Post non esistente");

  res.status(OK).json(post);
});

export const getPostByIdHandler = catchErrors(async (req, res) => {
  const id = Number(req.params.id);

  const post = await getPostById(id);
  appAssert(post, NOT_FOUND, "Post non esistente");

  res.status(OK).json(post);
});

export const modifyPostHandler = catchErrors(async (req, res) => {});
