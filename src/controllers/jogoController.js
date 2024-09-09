import jogo from "../models/Jogo.js";
import { publicadora } from "../models/Publicadora.js";

class JogoController {
  static async listarJogos(req, res) {
    try {
      const listaJogos = await jogo.find({});
      res.status(200).json(listaJogos);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarJogoPorId(req, res) {
    try {
      const id = req.params.id;
      const jogoEncontrado = await jogo.findById(id);
      res.status(200).json(jogoEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do jogo` });
    }
  }

  static async cadastrarJogo(req, res) {
    const novoJogo = req.body;
    try {
      const publicadoraEncontrada = await publicadora.findById(
        novoJogo.publicadora
      );
      const jogoCompleto = {
        ...novoJogo,
        publicadora: { ...publicadoraEncontrada._doc },
      };
      const jogoCriado = await jogo.create(jogoCompleto);
      res.status(201).json({ message: "criado com sucesso", jogo: novoJogo });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar jogo` });
    }
  }

  static async atualizarJogo(req, res) {
    try {
      const id = req.params.id;
      await jogo.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "jogo atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização` });
    }
  }

  static async excluirJogo(req, res) {
    try {
      const id = req.params.id;
      await jogo.findByIdAndDelete(id);
      res.status(200).json({ message: "jogo excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  }

  static async listarJogosPorDesenvolvedor(req, res) {
    const desenvolvedor = req.query.desenvolvedor;
    try {
      const jogosPorDesenvolvedor = await jogo.find({
        desenvolvedor: desenvolvedor,
      });
      res.status(200).json(jogosPorDesenvolvedor);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  }
}

export default JogoController;
