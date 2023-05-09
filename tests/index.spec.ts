import request from "supertest";
import { expect, describe, it } from "vitest";
import { app } from "../src";

describe("GET /ping", () => {
	it("should get the ping", async () => {
		const response = await request(app).get("/ping");
		expect(response.body.message).toEqual("Pong!");
	});
});
