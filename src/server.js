const express = require('express');
const app = express();

// Configuração das rotas e middleware
app.use(express.json());

// Exemplo de rota
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

// Exportando o app para ser usado nos testes
module.exports = app;