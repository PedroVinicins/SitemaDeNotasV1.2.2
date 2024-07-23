const express = require('express');
const app = express();
const path = require('path');

// Define a pasta 'public' como a pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
