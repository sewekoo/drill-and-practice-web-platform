import { assertEquals } from "../deps.js";
import { superoak } from "../deps.js";
import { app } from "../app.js";

Deno.test("GET to '/auth/login' should return with code 200", async () => {
  const testClient = await superoak(app);
  await testClient.get("/auth/login")
    .expect(200);
});

Deno.test("GET to '/auth/register' should return with code 200", async () => {
  const testClient = await superoak(app);
  await testClient.get("/auth/register")
    .expect(200);
});

Deno.test("POST to '/auth/login' with admin credentials should return with code 200", async () => {
  const testClient = await superoak(app);
  await testClient.post("/auth/login")
    .send({ email: "admin@admin.com", password: "123456" })
    .expect(200);
});