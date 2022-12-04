"use strict";
const loginUrl = 'http://localhost:3000/login/';

document.getElementById('register_button').addEventListener("click",function(){
    let user = {
        nombre : document.getElementById("username").value,
        apellido : document.getElementById("apellidos").value,
        correo : document.getElementById("correoRegistro").value,
        contraseña : document.getElementById("passwordRegistro").value
    }
    loadMyNotes(usersUrl, user, users => {
        user.users = users;
        location.href='Home.html';
    });
})


document.getElementById('loginbtn').addEventListener("click",function(){
    console.log("HOLAA")
    let user = {
        correo : document.getElementById("correo").value,
        contraseña : document.getElementById("password").value
    }
    
    validateUser(loginUrl, user, users => {
        user.users = users;
        location.href='MisNotas.html';
    });
})