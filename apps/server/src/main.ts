import express from "express";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import { appRouter } from "api";
import * as trpcExpress from "@trpc/server/adapters/express";

const port = process.env.PORT ?? 3001;

const app = express();

app
  .disable("x-powered-by")
  .use(morgan("dev"))
  .use(json())
  .use(urlencoded({ extended: true }))
  .use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  }),
);

app.listen(port, () => {
  console.log(`api server running on http://localhost:${port}`);
});
