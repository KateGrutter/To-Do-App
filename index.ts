import express from "express";
import { todoRouter } from "./routes/todos";

const app = express();

app.use(express.json());

app.use("/", todoRouter);

app.listen(3000, () => console.log('Server Running'));