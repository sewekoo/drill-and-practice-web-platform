import { superoak } from "../deps.js";
import { app } from "../app.js";

// Few automated tests to check that login and register pages are working.
// Idea here is to just determine that the site is able to launch at least.

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