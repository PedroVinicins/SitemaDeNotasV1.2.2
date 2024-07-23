document.getElementById('salvarBtn').addEventListener('click', function() {
    let nome = document.getElementById('nomeInput').value;

    localStorage.setItem('nome', nome);

    alert('Login salvo com sucesso!');
});

function abrirHTML(pagina) {
    if (pagina === 'logo') {
        window.open('/tests/Erro.html', '_blank');
    }

    if (pagina === 'cadastra') {
        window.open('http://localhost:3000/cadastro.html', '_blank');
    }

    if(pagina === 'PP'){
        window.open('/src/pages/home/Presença.html','_blank');
    }
}