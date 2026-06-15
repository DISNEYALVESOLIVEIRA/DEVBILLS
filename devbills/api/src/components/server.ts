import express from "express";
import { routes } from "./routes";

const app = express();

// Permite que o Express entenda JSON no corpo das requisições
app.use(express.json());

// Ativa as nossas rotas
app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333"));