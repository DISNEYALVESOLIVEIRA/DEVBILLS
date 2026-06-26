import express from "express";
import prisma from "./lib/prisma.js";
export const routes = express.Router();

// No seu routes.post, mude para usar o express direto nos tipos:
routes.post("/users", async (request: express.Request, response: express.Response) => {
  const { name, email } = request.body;

  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  return response.status(201).json(user);
});