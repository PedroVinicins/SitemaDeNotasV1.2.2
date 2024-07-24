const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const port = 3000;

// Configurações do banco de dados
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cadastro-usuarios'
};

const connection = mysql.createConnection(dbConfig);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.post('/submit', (req, res) => {
  const { nome,} = req.body;
  const { senha,} = req.body;
  const { sexo,} = req.body;
  const { data_nasc,} = req.body;


  const sql = 'INSERT INTO usuarios (nome, senha, sexo, data_nasc) VALUES (?, ?, ?, ?)';
  const values = [nome, senha, sexo, data_nasc];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error('Erro ao inserir os dados:', err);
      res.status(500).send('Erro ao inserir os dados');
    } else {
      console.log('Dados inseridos com sucesso:', results);
      res.send('Cadastro realizado com sucesso');
    }
  });

});
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}/home/cadastro.html`);
});