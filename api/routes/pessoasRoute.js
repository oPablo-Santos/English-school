const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();
router
  .get("/pessoas", PessoaController.pegaTodasAsPessoas)
  .get("/pessoas/:id", PessoaController.pegaUmaPessoas)
  .post("/pessoas", PessoaController.criaPessoas)
  .put("/pessoas/:id", PessoaController.atualizaPessoa)
  .delete("/pessoas/:id", PessoaController.apagaPessoas)
  .get(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.pegaUmaMatricula
  )
  .post("/pessoas/:estudanteId/matricula/", PessoaController.criaMatricula)
  .put(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.atualizaMatricula
  )
  .delete(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.atualizaMatricula
  );
module.exports = router;
