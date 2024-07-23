document.getElementById('salvarBtn').addEventListener('click', function() {
    let nome = document.getElementById('nomeInput').value;

    localStorage.setItem('nome', nome);

    alert('Login salvo com sucesso!');
});

function abrirHTML(pagina) {
    if (pagina === 'logo') {
        window.open('#', '_blank');
    }

    if (pagina === 'cadastra') {
        window.open('#', '_blank');
    }

    if(pagina === 'PP'){
        window.open('#','_blank');
    }
}