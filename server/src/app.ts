import cors from "cors";
import express from "express";

import env from "./resources/environment";
import Logger from "./resources/logger";

const app = express();
const port = env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  Logger.info(` Server is running at ${port} 🚀`);
});
