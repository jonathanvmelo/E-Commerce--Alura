

const cadastro = document.querySelector('.link-cadastrar');
const login = document.querySelector('.login');
const formCadastrar = document.querySelector('.form-cadastrar');

cadastro.addEventListener('click', () => {
    login.style.display = 'none';
    formCadastrar.style.display = 'block';
})

const linkLogin = document.querySelector('.link-login');

linkLogin.addEventListener('click', () => {
    formCadastrar.style.display = 'none';
    login.style.display = 'block';
});