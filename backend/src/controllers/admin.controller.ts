import { OK } from "../constants/http";
import catchErrors from "../utils/catchErrors";

export const postHandler = catchErrors(async (req, res) => {
  const request = req.body;
  console.log(request);

  res.status(OK).send(request);
});

export const getPostHandler = catchErrors(async (req, res) => {});

export const modifyPostHandler = catchErrors(async (req, res) => {});
