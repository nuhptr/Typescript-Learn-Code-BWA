import express from "express"

import { authMiddleware } from "@/middleware/auth-middleware"
import { UserController } from "@/controller/user-controller"
import { ContactController } from "@/controller/contact-controller"

export const apiRouter = express.Router()
apiRouter.use(authMiddleware)

// Users API
apiRouter.get("/api/users/current", UserController.get)
apiRouter.patch("/api/users/current", UserController.update)
apiRouter.delete("/api/users/current", UserController.logout)

// Contacts API
apiRouter.post("/api/contacts", ContactController.create)
// :contactId(\\d+) is a regex to ensure contactId is a number
apiRouter.get("/api/contacts/:contactId(\\d+)", ContactController.get)
