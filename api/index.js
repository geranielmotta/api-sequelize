import express from "express";
import config from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./server/routes/UserRoutes";
import projectRouter from "./server/routes/ProjectRoutes";

config.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT;

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/project", projectRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    message: `API está ativa.`,
  });
});

app.listen(port, () => {
  console.log("Server está rodando na porta " + port);
});

export default app;
