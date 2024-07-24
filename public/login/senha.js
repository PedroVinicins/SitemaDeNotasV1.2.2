function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == 'usuario' && senha == '123'){
        location.href='#';
    }else{
        alert('Nome ou senha inválida!!!')
    }
};