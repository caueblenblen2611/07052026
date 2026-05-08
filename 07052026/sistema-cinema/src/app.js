const express = require('express');
const app = express();

app.use(express.json());

const sessaoController = require('./controller/sessaoController');

// rota principal
app.post('/sessao/publico', sessaoController.registrarPublico);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
}); 