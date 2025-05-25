import request from "supertest";
import { expect, describe, afterAll } from "vitest";
import app from "./src/index";
import { mockedPost } from "./mockedData/mockedData";
import { db } from "../src/config/db";
import { postsTable } from "../src/models/PostModel";
import { eq } from "drizzle-orm";

let agent;

afterAll(async () => {
  await db
    .delete(postsTable)
    .where(eq(postsTable.slug, mockedPost.slug))
    .execute();
});

describe("GET / hello", () => {
  it("should return hello ", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "hello" });
  });
});

describe("TEST POST API integration", () => {
  beforeEach(() => {
    agent = request.agent(app);
  });

  it("Should block access to /manage/resources if not authenticated", async () => {
    const response = await agent.post("/manage/resources").send(mockedPost);

    expect(response.statusCode).toBe(401);
    expect(response.body).toEqual({ message: "You are not authorized" });
  });

  it("Should not login with wrong password", async () => {
    const response = await agent
      .post("/manage/contacts")
      .send({ password: "wrong password" });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "You are not authorized",
      errorCode: {
        statusCode: 401,
      },
    });
    expect(response.header["set-cookie"]).toBeFalsy();
  });

  it("Should login successfully and set cookie", async () => {
    const response = await agent
      .post("/manage/contacts")
      .send({ password: process.env.SESSION_SECRET });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Login successful" });
    expect(response.header["set-cookie"]).toBeDefined();
    expect(response.header["set-cookie"].length).toBeGreaterThan(0);

    const authCookie = response.header["set-cookie"].find((cookie) =>
      cookie.startsWith("connect.sid=")
    );

    expect(authCookie).toBeDefined();
    expect(authCookie).toContain("HttpOnly");
  });

  it("Should create a post after logging in", async () => {
    await agent
      .post("/manage/contacts")
      .send({ password: process.env.SESSION_SECRET })
      .expect(200);
    const response = await agent.post("/manage/resources").send(mockedPost);

    // if (response.statusCode !== 201) {
    //   console.error("API Response Body (400 Error):", response.body);
    // }

    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject({
      slug: mockedPost.slug,
      author: mockedPost.author,
      content: mockedPost.content,
    });
  });

  it("Should logout and clear the cookies", async () => {
    await agent
      .post("/manage/contacts")
      .send({ password: process.env.SESSION_SECRET })
      .expect(200);
    const response = await agent.post("/manage/clear");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "Logout successful" });

    const setCookie = response.header["set-cookie"];
    expect(setCookie).toBeDefined();

    const sessionCookie = setCookie.find((cookie) =>
      cookie.startsWith("connect.sid=")
    );

    expect(sessionCookie).toBeDefined();
    expect(sessionCookie).toMatch(/Expires=Thu, 01 Jan 1970|Max-Age=0/);
  });
});
