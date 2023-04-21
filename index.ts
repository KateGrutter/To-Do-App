import express from "express";
import { todoRouter } from "./routes/todos";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", todoRouter);

app.listen(3000, () => console.log('Server Running'));