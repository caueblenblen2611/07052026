const repository = require('../repository/sessaoRepository');

exports.registrarPublico = (idSessao, quantidade, callback) => {

  repository.findById(idSessao, (err, sessao) => {
    if (err) return callback(err);
    if (!sessao) return callback("Sessão não encontrada");

    const novoTotal = sessao.publico + quantidade;

    // Regra de negócio
    if (novoTotal > sessao.capacidade) {
      return callback("Capacidade excedida");
    }

    repository.updatePublico(idSessao, novoTotal, callback);
  });

};