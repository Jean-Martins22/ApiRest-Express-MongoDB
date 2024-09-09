import express from "express";
import PublicadoraController from "../controllers/publicadoraController.js";

const routes = express.Router();

routes.get("/publicadoras", PublicadoraController.listarPublicadoras);
routes.get("/publicadoras/:id", PublicadoraController.listarPublicadoraPorId);
routes.post("/publicadoras", PublicadoraController.cadastrarPublicadora);
routes.put("/publicadoras/:id", PublicadoraController.atualizarPublicadora);
routes.delete("/publicadoras/:id", PublicadoraController.excluirPublicadora);

export default routes;
