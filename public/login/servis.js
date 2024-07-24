const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
  const { login, senha } = req.body;
  console.log(`Login: ${login}, Senha: ${senha}`);

  // Aqui você pode adicionar lógica para validar o login e a senha
  // Por enquanto, vamos apenas enviar uma resposta simples

  // Se o login for bem-sucedido, envie um JSON indicando sucesso
  if (login === 'usuario' && senha === 'senha') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}/login.html`);
});