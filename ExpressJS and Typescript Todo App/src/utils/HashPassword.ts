import bcrypt from "bcrypt";

class PasswordHash {
  public static hash = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
  };
}

// TODO: setiap selesai membuat 
export default PasswordHash;