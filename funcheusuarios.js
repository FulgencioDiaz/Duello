
//localStorage.clear()
// data seed

const usuarios = [
    {email: "usuario1@duello.com", password: "usuario1", rol: "trabajador"},
    {email: "usuario2@duello.com", password: "usuario2", rol: "trabajador"},
    {email: "usuario3@duello.com", password: "usuario3", rol: "trabajador"},
    {email: "usuario4@duello.com", password: "usuario4", rol: "trabajador"},
    {email: "usuario5@duello.com", password: "usuario5", rol: "trabajador"},
    {email: "usuario6@duello.com", password: "usuario6", rol: "trabajador"},
    {email: "usuario7@duello.com", password: "usuario7", rol: "trabajador"},
    {email: "usuario8@duello.com", password: "usuario8", rol: "trabajador"},
    {email: "usuario9@duello.com", password: "usuario9", rol: "trabajador"},
    {email: "usuario10@duello.com", password: "usuario10", rol: "trabajador"},
    


    {email: "usuario11@duello.com", password: "usuario11", rol: "admin"},
    {email: "usuario12@duello.com", password: "usuario12", rol: "admin"},
    {email: "usuario13@duello.com", password: "usuario13", rol: "admin"},
]


const loggedUser = localStorage.getItem("usuarioLogeado");

isLogged = (loggedUser) ? JSON.parse(loggedUser) : false;

console.log(isLogged)

localStorage.setItem("usuarios", JSON.stringify(usuarios));



if (isLogged) {
    document.getElementById("formLogin").style.display = "none";

    document.getElementById("deslogear").style.display = "inline";

}

document.getElementById("deslogear").onclick = function() {
    localStorage.setItem("usuarioLogeado", "");

}

        const allUsers = JSON.parse(localStorage.getItem("usuarios"));

        const usuarioLogeado = localStorage.getItem("usuarioLogeado");

        console.log(usuarioLogeado);

        console.log(allUsers)
        const email = document.querySelector('#email')
        const password = document.querySelector('#password')
        const rol = document.querySelector('#rol')
        const loginBtn = document.querySelector('#login')

        
        loginBtn.onclick = function() {

            const currentUser = allUsers.filter(user => user.email === email.value && user.password === password.value && user.rol === rol.value)

            

            if (currentUser.length) {
            

                 const usuarioLogeado = localStorage.setItem("usuarioLogeado", JSON.stringify(currentUser));
            } else {
                console.log("NO HAY USER")
            }
            
        }
