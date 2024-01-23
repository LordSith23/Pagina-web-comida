const API = 'https://656f63006529ec1c6237d19d.mockapi.io/api/';

const btnLogin = document.getElementById('login');

btnLogin.addEventListener('click',async (e) => {
    e.preventDefault();
    const username = document.getElementById('user');
    const password = document.getElementById('password');
    console.log(username.value);
    console.log(password.value);

    const data = await fetchApi.get('user?username='+username.value+'&password='+password.value);
    if (data[0].username===username.value && data[0].password===password.value) {
        window.location.href='index2.html';
    } else {
        alert('Usuario y/o contraseña incorrecta');
    }
});

const fetchApi = {
    get: async (endpoint)=>{
        console.log(API+endpoint);
        return await fetch(API+endpoint,{method:"GET"}).then((res)=>res.json());
    }
}