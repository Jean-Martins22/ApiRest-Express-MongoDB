import mongoose from "mongoose";
import { publicadoraSchema } from "./Publicadora.js";

const jogoSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    desenvolvedor: { type: String },
    preco: { type: Number },
    quantidade: { type: Number },
    publicadora: publicadoraSchema,
  },
  { versionKey: false }
);

const jogo = mongoose.model("jogos", jogoSchema);

export default jogo;
