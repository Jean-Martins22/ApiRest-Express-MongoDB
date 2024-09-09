import { publicadora } from "../models/Publicadora.js";

class PublicadoraController {
  static async listarPublicadoras(req, res) {
    try {
      const listaPublicadoras = await publicadora.find({});
      res.status(200).json(listaPublicadoras);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarPublicadoraPorId(req, res) {
    try {
      const id = req.params.id;
      const publicadoraEncontrada = await publicadora.findById(id);
      res.status(200).json(publicadoraEncontrada);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha na requisição da Publicadora`,
      });
    }
  }

  static async cadastrarPublicadora(req, res) {
    try {
      const novaPublicadora = await publicadora.create(req.body);
      res
        .status(201)
        .json({ message: "criado com sucesso", jogo: novaPublicadora });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar Publicadora` });
    }
  }

  static async atualizarPublicadora(req, res) {
    try {
      const id = req.params.id;
      await publicadora.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Publicadora atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização` });
    }
  }

  static async excluirPublicadora(req, res) {
    try {
      const id = req.params.id;
      await publicadora.findByIdAndDelete(id);
      res.status(200).json({ message: "Publicadora excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  }
}

export default PublicadoraController;
