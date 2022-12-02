"use strict";

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