import { NODE_ENV, SESSION_SECRET } from "../constants/env";
import { OK, UNAUTHORIZED } from "../constants/http";
import { postSchema } from "../models/post.schema";
import appAssert from "../utils/AppAssert";
import catchErrors from "../utils/catchErrors";
import { createPost } from "../utils/posts";

//logica delle routes admin

export const loginHandler = catchErrors(async (req, res) => {
  const { password } = req.body;

  appAssert(password === SESSION_SECRET, UNAUTHORIZED, "Non autorizzato");
  req.session.isAdmin = true;

  res.status(OK).json({ message: "Login riuscito" });
});

export const logoutHandler = catchErrors(async (req, res) => {
  res
    .clearCookie("connect.sid", {
      path: "/",
      httpOnly: true,
      secure: NODE_ENV === "production",
    })
    .status(OK)
    .json({ message: "Logout effettuato" });
});

export const postHandler = catchErrors(async (req, res) => {
  const request = postSchema.parse(req.body);

  await createPost(request);

  res.status(OK).json(request);
});

export const getPostHandler = catchErrors(async (req, res) => {});

export const modifyPostHandler = catchErrors(async (req, res) => {});
