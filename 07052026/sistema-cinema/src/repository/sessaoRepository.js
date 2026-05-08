const db = require('../database');

// Buscar sessão
exports.findById = (id, callback) => {
  db.get("SELECT * FROM sessao WHERE id = ?", [id], callback);
};

// Atualizar público
exports.updatePublico = (id, novoPublico, callback) => {
  db.run(
    "UPDATE sessao SET publico = ? WHERE id = ?",
    [novoPublico, id],
    callback
  );
};