import { Router } from "express";
import prisma from "./lib/prisma";

export const routes = Router();

// Rota para criar um usuário
routes.post("/users", async (request, response) => {
  const { name, email } = request.body;

  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  return response.status(201).json(user);
});