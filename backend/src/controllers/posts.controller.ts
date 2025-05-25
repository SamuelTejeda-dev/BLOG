import { NOT_FOUND, OK } from "../constants/http";
import appAssert from "../utils/AppAssert";
import catchErrors from "../utils/catchErrors";
import { getPostBySlug, getXPosts } from "../utils/posts";

//logica delle routes admin

export const getPostBySlugHandler = catchErrors(async (req, res) => {
  const slug = req.params.slug;

  const post = await getPostBySlug(slug);
  appAssert(post, NOT_FOUND, "Post non esistente");

  res.status(OK).json(post);
});

export const getXPostsBySlugHandler = catchErrors(async (req, res) => {
  const post = await getXPosts(10);
  appAssert(post.length !== 0, NOT_FOUND, "Non ci sono altri post");

  res.status(OK).json(post);
});

export const modifyPostHandler = catchErrors(async (req, res) => {});
