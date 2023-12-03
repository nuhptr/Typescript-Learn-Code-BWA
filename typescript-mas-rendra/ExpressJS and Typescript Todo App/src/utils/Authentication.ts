import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default class Authentication {
   // TODO: hashing password
   public static passwordHash = (password: string): Promise<string> => {
      return bcrypt.hash(password, 10)
   }

   // TODO: compare password with encrypted password
   public static passwordCheck = async (text: string, encryptedText: string): Promise<boolean> => {
      let result = await bcrypt.compare(text, encryptedText)
      return result
   }

   // TODO: generate token
   public static generateToken = (id: number, username: string, password: string): string => {
      const secretKey = process.env.JWT_SECRET_KEY || "secret"

      const token: string = jwt.sign({ id, username, password }, secretKey)
      return token
   }
}
