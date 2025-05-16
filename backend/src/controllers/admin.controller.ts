import { OK } from "../constants/http";
import { postSchema } from "../models/post.schema";
import catchErrors from "../utils/catchErrors";
import { createPost } from "../utils/posts";

export const postHandler = catchErrors(async (req, res) => {
  const result = postSchema.parse(req.body);

  await createPost(result);

  res.status(OK).send(result);
});

export const getPostHandler = catchErrors(async (req, res) => {});

export const modifyPostHandler = catchErrors(async (req, res) => {});
