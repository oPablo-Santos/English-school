const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();
router
  .get("/pessoas", PessoaController.pegaPessoasAtivas)
  .get("/pessoas/todos", PessoaController.pegaTodasAsPessoas)
  .get("/pessoas/:id", PessoaController.pegaUmaPessoas)
  .get(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.pegaUmaMatricula
  )
  .get("/pessoas/:estudanteId/matricula", PessoaController.pegaMatriculas)
  .post("/pessoas", PessoaController.criaPessoas)
  .post("/pessoas/:id/restaura", PessoaController.restauraPessoas)
  .post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula)
  .put("/pessoas/:id", PessoaController.atualizaPessoa)
  .put("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.atualizaMatricula)
  .delete("/pessoas/:id",PessoaController.apagaPessoas)
  .delete("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.apagaMatricula)
module.exports = router;
