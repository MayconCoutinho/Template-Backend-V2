import express, { NextFunction, Request, Response } from "express";
import AppError from "./error/AppError";
import pingRouter from "./routes/ping.routes";

const app = express();
app.use(pingRouter);

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
	if (err instanceof AppError) {
		return response.status(err.statusCode).json({
			status: "error",
			message: err.message,
		});
	}

	console.error(err);

	return response.status(500).json({
		status: "error",
		message: "Internal server error",
	});
});

export { app };
