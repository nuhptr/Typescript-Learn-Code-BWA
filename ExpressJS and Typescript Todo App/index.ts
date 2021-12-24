import bodyParser from "body-parser";
import express, { Application, Request, Response } from "express";

// logger api status
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { config as dotenv } from "dotenv";

// user Route
import UserRouter from "./src/routers/UserRouter";
import AuthRouter from "./src/routers/AuthRouter";
import TodoRouter from "./src/routers/TodoRouter";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    dotenv();
  }

  protected plugins(): void {
    this.app.use(bodyParser.json());
    this.app.use(morgan("dev"));

    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Route default Typescript");
    });

    // TODO: custom routes
    this.app.use("/api/v1/users", UserRouter);
    this.app.use("/api/v1/auth", AuthRouter);
    this.app.use("/api/v1/todos", TodoRouter);
  }
}

const port: number = 8000;
const app = new App().app;
app.listen(port, () => {
  console.log(`Aplikasi ini berjalan di port ${port}`);
  console.log(process.env.DB_HOST);
});
