import { assertEquals } from "../deps.js";
import { superoak } from "../deps.js";
import { app } from "../app.js";

Deno.test("GET to '/' should return with code 200", async () => {
  const testClient = await superoak(app);
  await testClient.get("/auth/login")
    .expect(200);
});