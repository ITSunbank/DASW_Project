"use strict";

class UserException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class User {
    constructor(nombre, apellido, correo, contraseña) {
        this._uuid = User.generateUUID();
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contraseña = contraseña;
    }

    get uuid() {
        return this._uuid;
    }
    get nombre() {
        return this._nombre; //_para no hacer recursividad.
    }
    get apellido() {
        return this._apellido;
    }
    get correo() {
        return this._correo;
    }
    get contraseña() {
        return this._contraseña;
    }

    set uuid(value) {
        throw new UserException("User UUIDs are auto-generated.");
    }
    set nombre(value) {
        if (typeof value !== 'string' || value === '') {
            throw new UserException("Invalid name for the User");
        }
        this._nombre = value;
    }
    set apellido(value) {
        if (typeof value !== 'string' || value === '') {
            throw new UserException("User lastname is not valid.");
        }
        this._apellido = value;
    }
    set correo(value) {
        if (typeof value !== 'string' || value === '') {
            throw new UserException("User mail is not valid.");
        }
        this._correo = value;
    }
    set contraseña(value) {
        if (typeof value !== 'string' || value === '') {
            throw new UserException("User password is not valid.");
        }
        this._contraseña = value;
    }

    static generateUser(user) {
        let nombre = user.nombre != undefined ? user.nombre : user._nombre;
        let apellido = user.apellido != undefined ? user.apellido : user._apellido;
        let correo = user.correo != undefined ? user.correo : user._correo;
        let contraseña = user.contraseña != undefined ? user.contraseña : user._contraseña;

        return new User(nombre, apellido, correo, contraseña);
    }

    static generateUUID() {
        let uid = '';
        for (let i = 0; i < 10; i++) {
            uid += Math.trunc(Math.random() * 10);
        }
        return uid;
    }

}
module.exports = User;