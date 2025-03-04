import { InferCreationAttributes } from "sequelize";
import User from "../../models/user";
import argon2 from "argon2";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/user.repository";
import { warn } from "console";

interface RegisterLoginData {
  email: string;
  password: string;
}

const register = async (data: RegisterLoginData) => {
  const exists = await userRepository.findByEmail(data.email);
  if (exists) {
    //TODO: quelle erreur renvoyer?
    throw new Error("");
  }
  //const hash = await argon2.hash(data.password, {
  //  secret: Buffer.from(process.env.PASSWORD_SECRET as string),
  //});
  const hash = await bcrypt.hash(data.password, 10);
  const user: Omit<InferCreationAttributes<User>, "id"> = {
    email: data.email,
    hash: hash,
  };
  await userRepository.create(user);
};

const login = async (data: RegisterLoginData) => {
  const user = await userRepository.findByEmail(data.email);
  if (user) {
    //const match = await argon2.verify(user.hash, data.password);
    const match = await bcrypt.compare(data.password, user.hash);
    if (match) {
      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "2h",
        },
      );
      return token;
    } else {
      throw new Error("Email or password incorrect.");
    }
  } else {
    throw new Error("Email or password incorrect.");
  }
};

export default { register, login };
