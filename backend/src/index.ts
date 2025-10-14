import express from "express";
import cors from "cors";
import {
  APP_ORIGIN,
  NODE_ENV,
  PORT,
  SESSION_SECRET,
  APP_ORIGIN_DOCKER,
} from "./constants/env";
import errorHandler from "./middleware/errorHandler";
import adminRoutes from "./routes/admin.route";
import postsRoutes from "./routes/posts.route";
import helmet from "helmet";
import session from "express-session";

const allowedOrigins: string[] = [APP_ORIGIN, APP_ORIGIN_DOCKER];

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(
  session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      httpOnly: true,
      secure: NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 2, //2 ore
      sameSite: "strict",
    },
  })
);

app.use(helmet());

app.get("/health", (_, res) => {
  res.json({ message: "health" });
});

app.use("/manage", adminRoutes);
app.use("/posts", postsRoutes);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} enviroment`);
});

export default app;
// export const closeServer = () => {
//   server.close();
// };
