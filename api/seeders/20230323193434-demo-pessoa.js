"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
    return queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome: "Julio Cesar",
          ativo: false,
          email: "jcOliveira@gmail.com",
          role: "Estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Lucio Tavares",
          ativo: true,
          email: "Tavares@gmail.com",
          role: "Estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Eduardo Campos",
          ativo: false,
          email: "EDCampos@sp.com",
          role: "Docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Leandro Damião",
          ativo: true,
          email: "lean@inter.com",
          role: "Docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Renato Augusto",
          ativo: true,
          email: "ra.cor@sccp.com",
          role: "Docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
    return queryInterface.bulkDelete("Pessoas", null, {});
  },
};
