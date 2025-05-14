import { OK } from "../constants/http";
import catchErrors from "../utils/catchErrors";
import { getPostBySlug } from "../utils/posts";

export const getPostBySlugHandler = catchErrors(async (req, res) => {
  const slug = req.params.slug;

  const post = await getPostBySlug(slug);

  res.status(OK).json(post);
});

export const getPostsHandler = catchErrors(async (req, res) => {});

export const modifyPostHandler = catchErrors(async (req, res) => {});
