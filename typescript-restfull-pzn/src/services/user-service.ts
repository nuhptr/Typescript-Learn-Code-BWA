import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import { User } from "@prisma/client"

import { prismaClient } from "../application/database"
import { ResponseError } from "../error/response-error"
import {
   CreateUserRequest,
   LoginUserRequest,
   UpdateUserRequest,
   UserResponse,
   toUserResponse,
} from "../model/user-model"
import { UserValidation } from "../validation/user-validation"
import { Validation } from "../validation/validation"

export class UserService {
   // register user (public api)
   static async register(request: CreateUserRequest): Promise<UserResponse> {
      const registerRequest = Validation.validate(UserValidation.REGISTER, request)

      const totalUserWithSameUsername = await prismaClient.user.count({
         where: {
            username: registerRequest.username,
         },
      })

      if (totalUserWithSameUsername != 0) {
         throw new ResponseError(400, "Username already exist")
      }

      // hash password
      registerRequest.password = await bcrypt.hash(registerRequest.password, 10)

      // create user
      const user = await prismaClient.user.create({ data: registerRequest })

      return toUserResponse(user)
   }

   // login user (public api)
   static async login(request: LoginUserRequest): Promise<UserResponse> {
      const loginRequest = Validation.validate(UserValidation.LOGIN, request)

      let user = await prismaClient.user.findUnique({
         where: {
            username: loginRequest.username,
         },
      })

      if (!user) {
         throw new ResponseError(401, "Username or password is wrong!")
      }

      const passwordIsValid = await bcrypt.compare(loginRequest.password, user.password)
      if (!passwordIsValid) {
         throw new ResponseError(401, "Username or password is wrong!")
      }

      user = await prismaClient.user.update({
         where: {
            username: loginRequest.username,
         },
         data: {
            token: uuid(),
         },
      })

      const response = toUserResponse(user)
      response.token = user.token! // make the response token change to updated token
      return response
   }

   // get user (login first)
   static async get(user: User): Promise<UserResponse> {
      return toUserResponse(user)
   }

   // update user
   static async update(user: User, request: UpdateUserRequest): Promise<UserResponse> {
      const updateRequest = Validation.validate(UserValidation.UPDATE, request)

      if (updateRequest.name) {
         user.name = updateRequest.name
      }

      if (updateRequest.password) {
         user.password = await bcrypt.hash(updateRequest.password, 10)
      }

      const result = await prismaClient.user.update({
         where: {
            username: user.username,
         },
         data: user,
      })

      return toUserResponse(result)
   }

   // logout user
   static async logout(user: User): Promise<UserResponse> {
      const result = await prismaClient.user.update({
         where: {
            username: user.username,
         },
         data: {
            token: null,
         },
      })

      return toUserResponse(result)
   }
}
