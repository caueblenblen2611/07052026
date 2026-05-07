const service = require('../service/sessaoService');

exports.registrarPublico = (req, res) => {
  const { idSessao, quantidade } = req.body;

  service.registrarPublico(idSessao, quantidade, (err) => {
    if (err) return res.status(400).send(err);
    res.send("Público registrado com sucesso");
  });
};