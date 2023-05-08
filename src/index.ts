import cors from "cors";
import express from "express";
import { pingRouter } from "./router/pingRouter";

const app = express();
app.use(express.json());
app.use(cors());
app.listen(3003, () => {
	console.log(`Servidor rodando na porta ${3003}`);
});

app.use("/ping", pingRouter);
