import supertest from "supertest"

import { web } from "@/application/web"
import { ContactTest, UserTest } from "./test-util"
import { logger } from "@/application/logging"

// POST /api/contacts
describe("POST /api/contacts", () => {
   beforeEach(async () => {
      await UserTest.create()
   })

   afterEach(async () => {
      await ContactTest.deleteAll()
      await UserTest.delete()
   })

   it("should create new contact", async () => {
      const response = await supertest(web).post("/api/contacts").set("X-API-TOKEN", "test").send({
         first_name: "John",
         last_name: "Doe",
         email: "jhondoe@example.com",
         phone: "081234567890",
      })

      logger.debug(response.body)
      expect(response.status).toBe(201)
      expect(response.body.data.id).toBeDefined()
      expect(response.body.data.first_name).toBe("John")
      expect(response.body.data.last_name).toBe("Doe")
      expect(response.body.data.email).toBe("jhondoe@example.com")
      expect(response.body.data.phone).toBe("081234567890")
   })

   it("should reject create new contact if data is invalid", async () => {
      const response = await supertest(web).post("/api/contacts").set("X-API-TOKEN", "test").send({
         first_name: "",
         last_name: "",
         email: "jhondoe",
         phone: "081234567890123213",
      })

      logger.debug(response.body)
      expect(response.status).toBe(400)
      expect(response.body.errors).toBeDefined()
   })
})

// GET /api/contacts/:contactId
describe("GET /api/contacts/:contactId", () => {
   beforeEach(async () => {
      await UserTest.create()
      await ContactTest.create()
   })

   afterEach(async () => {
      await UserTest.delete()
      await ContactTest.deleteAll()
   })

   it("should be able get contact", async () => {
      const contact = await ContactTest.get()
      const response = await supertest(web).get(`/api/contacts/${contact.id}`).set("X-API-TOKEN", "test")

      logger.debug(response.body)
      expect(response.status).toBe(200)
      expect(response.body.data.id).toBeDefined()
      expect(response.body.data.first_name).toBe(contact.first_name)
      expect(response.body.data.last_name).toBe(contact.last_name)
      expect(response.body.data.email).toBe(contact.email)
      expect(response.body.data.phone).toBe(contact.phone)
   })

   it("should reject get contact if contact is not found", async () => {
      const contact = await ContactTest.get()
      const response = await supertest(web)
         .get(`/api/contacts/${contact.id + 1}`)
         .set("X-API-TOKEN", "test")

      logger.debug(response.body)
      expect(response.status).toBe(404)
      expect(response.body.errors).toBeDefined()
   })
})

// PUT /api/contacts/:contactId
describe("PUT /api/contacts/:contactId", () => {
   beforeEach(async () => {
      await UserTest.create()
      await ContactTest.create()
   })

   afterEach(async () => {
      await UserTest.delete()
      await ContactTest.deleteAll()
   })

   it("should be able update contact", async () => {
      const contact = await ContactTest.get()
      const response = await supertest(web).put(`/api/contacts/${contact.id}`).set("X-API-TOKEN", "test").send({
         first_name: "John",
         last_name: "Doe",
         email: "jhondoe@example.com",
         phone: "081234567890",
      })

      logger.debug(response.body)
      expect(response.status).toBe(200)
      expect(response.body.data.id).toBe(contact.id)
      expect(response.body.data.first_name).toBe("John")
      expect(response.body.data.last_name).toBe("Doe")
      expect(response.body.data.email).toBe("jhondoe@example.com")
      expect(response.body.data.phone).toBe("081234567890")
   })

   it("should reject update contact if request is invalid", async () => {
      const contact = await ContactTest.get()
      const response = await supertest(web).put(`/api/contacts/${contact.id}`).set("X-API-TOKEN", "test").send({
         first_name: "",
         last_name: "",
         email: "jhondoe",
         phone: "",
      })

      logger.debug(response.body)
      expect(response.status).toBe(400)
      expect(response.body.errors).toBeDefined()
   })
})

// DELETE /api/contacts/:contactId
describe("DELETE /api/contacts/:contactId", () => {
   beforeEach(async () => {
      await UserTest.create()
      await ContactTest.create()
   })

   afterEach(async () => {
      await UserTest.delete()
      await ContactTest.deleteAll()
   })

   it("should be able delete contact", async () => {
      const contact = await ContactTest.get()
      const response = await supertest(web).delete(`/api/contacts/${contact.id}`).set("X-API-TOKEN", "test")

      logger.debug(response.body)
      expect(response.status).toBe(200)
      expect(response.body.data).toBe("OK")
   })

   it("should reject delete contact if contact is not found", async () => {
      const contact = await ContactTest.get()
      const response = await supertest(web)
         .delete(`/api/contacts/${contact.id + 1}`)
         .set("X-API-TOKEN", "test")

      logger.debug(response.body)
      expect(response.status).toBe(404)
      expect(response.body.errors).toBeDefined()
   })
})
