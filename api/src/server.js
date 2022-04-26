import express from 'express';
import cors from 'cors';
import routes from "./routes.js";

const app = express();

app.use(cors());
app.use(routes);

app.listen(process.env.SERVER_PORT ?? 3333);