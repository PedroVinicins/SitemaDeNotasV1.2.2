document.getElementById('salvarBtn').addEventListener('click', function() {
    let nome = document.getElementById('nomeInput').value;

    localStorage.setItem('nome', nome);

    alert('Login salvo com sucesso!');
});

function abrirHTML(pagina) {
    if (pagina === 'logo') {
        window.open('http://localhost:3000/home/Erro.html', '_blank');
    }

    if (pagina === 'cadastra') {
        window.open('http://localhost:3000/home/cadastra.html', '_blank');
    }

    if(pagina === 'PP'){
        window.open('http://localhost:3000/home/presença.html','_blank');
    }
}