import { Request, Response } from "express";
import authService from "../services/auth.service";

const register = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    await authService.register(data);
    res.status(201).json({ message: "Registered successfully!" });
  } catch (err) {
    res.sendStatus(500);
  }
};

const login = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const response = await authService.login(data);
    res.cookie("Authorization", `Bearer ${response}`, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
};

const logout = (req: Request, res: Response) => {
  res.clearCookie("Authorization").sendStatus(200);
};

export default { register, login, logout };
