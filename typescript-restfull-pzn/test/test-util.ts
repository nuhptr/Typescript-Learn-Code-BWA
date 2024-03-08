import bcrypt from "bcrypt"

import { prismaClient } from "../src/application/database"
import { User } from "@prisma/client"

export class UserTest {
   static async delete() {
      // using deleteMany whatever data exist or not it still running delete
      await prismaClient.user.deleteMany({
         where: {
            username: "test",
         },
      })
   }

   static async create() {
      await prismaClient.user.create({
         data: {
            username: "test",
            name: "test",
            password: await bcrypt.hash("test", 10),
            token: "test",
         },
      })
   }

   static async get(): Promise<User> {
      const user = await prismaClient.user.findFirst({
         where: {
            username: "test",
         },
      })

      if (!user) {
         throw new Error("User not found.")
      }

      return user
   }
}
