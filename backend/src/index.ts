import express from "express";
import cors from "cors";
import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env";
import errorHandler from "./middleware/errorHandler";
import adminRoutes from "./routes/admin.route";
import postsRoutes from "./routes/posts.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: APP_ORIGIN,
  })
);

app.get("/", (req, res) => {
  res.send("ciao");
});

app.use("/admin", adminRoutes);
app.use("/post", postsRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} enviroment`);
});
