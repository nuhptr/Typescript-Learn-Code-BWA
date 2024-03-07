import supertest from "supertest"

import { web } from "../src/application/web"
import { logger } from "../src/application/logging"
import { UserTest } from "./test-util"

// Register Test
describe("POST /api/users", () => {
   // Clean up database after each test
   afterEach(async () => {
      await UserTest.delete()
   })

   // Failed register because empty request
   it("should reject register new user if request is invalid", async () => {
      const response = await supertest(web).post("/api/users").send({
         name: "",
         username: "",
         password: "",
      })

      logger.debug(response.body)
      expect(response.status).toBe(400)
      expect(response.body.errors).toBeDefined()
   })

   // Success register new user
   it("should register new user", async () => {
      const response = await supertest(web).post("/api/users").send({
         name: "test",
         username: "test",
         password: "test",
      })

      logger.debug(response.body)
      expect(response.status).toBe(201)
      expect(response.body.data.name).toBe("test")
      expect(response.body.data.username).toBe("test")
   })
})

// Login Test
describe("POST /api/users/login", () => {
   beforeEach(async () => {
      // create user before start test
      await UserTest.create()
   })

   afterEach(async () => {
      // delete user
      await UserTest.delete()
   })

   // login success
   it("should be able to login", async () => {
      const response = await supertest(web).post("/api/users/login").send({
         username: "test",
         password: "test",
      })

      logger.debug(response.body)
      expect(response.status).toBe(200)
      expect(response.body.data.name).toBe("test")
      expect(response.body.data.username).toBe("test")
      expect(response.body.data.token).toBeDefined()
   })

   // login failed because wrong password
   it("should reject login if password is wrong", async () => {
      const response = await supertest(web).post("/api/users/login").send({
         username: "test",
         password: "wrong",
      })

      logger.debug(response.body)
      expect(response.status).toBe(401)
      expect(response.body.errors).toBeDefined()
   })

   // login failed because wrong username
   it("should reject login if username is wrong", async () => {
      const response = await supertest(web).post("/api/users/login").send({
         username: "wrong",
         password: "test",
      })

      logger.debug(response.body)
      expect(response.status).toBe(401)
      expect(response.body.errors).toBeDefined()
   })
})

// GET USER
describe("GET /api/users", () => {
   beforeEach(async () => {
      // create user before start test
      await UserTest.create()
   })

   afterEach(async () => {
      // delete user
      await UserTest.delete()
   })

   it("should get user with using token!", async () => {
      const response = await supertest(web).get("/api/users/current").set("X-API-TOKEN", "test")

      logger.debug(response.body)
      expect(response.status).toBe(200)
      expect(response.body.data.name).toBe("test")
      expect(response.body.data.username).toBe("test")
   })

   it("should reject get user if token is wrong", async () => {
      const response = await supertest(web).get("/api/users/current").set("X-API-TOKEN", "wrong")

      logger.debug(response.body)
      expect(response.status).toBe(401)
      expect(response.body.errors).toBeDefined()
   })
})
