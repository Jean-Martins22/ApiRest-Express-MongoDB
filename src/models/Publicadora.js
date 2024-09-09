import mongoose from "mongoose";

const publicadoraSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    presidente: { type: String },
  },
  { versionKey: false }
);

const publicadora = mongoose.model("publicadoras", publicadoraSchema);

export { publicadora, publicadoraSchema };
