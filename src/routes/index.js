import express from "express";
import jogos from "./jogosRoutes.js";
import publicadoras from "./publicadorasRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), jogos, publicadoras);
};

export default routes;
