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

    //------- Funciones estAticas -------

    static createFromJson(jsonValue) {  //MEtodos que pertenecen a la clase, no al objeto, eso es el static. Para poder hacer un Tag.cleanObject() por ejemplo.
        let obj = JSON.parse(jsonValue);
        return Tag.createFromObject(obj);
    }

    static createFromObject(obj) {
        let newUser = {};
        Object.assign(newUser, obj); //This will clone original object, but also handle possible non-object values.
        User.cleanObject(newUser);

        //Convert from newTag to Tag instance
        let user = new User(newUser._nombre, newUser._apellido, newUser._correo, newUser._contraseña);

        if('_uuid' in newUser) {
            user._uuid = newUser._uuid;
        }
        return user;
    }

    static cleanObject(obj) {
        //Verify that we only contain the desired properties
        let properties = ['_uuid', '_nombre', '_apellido', '_correo', '_contraseña'];
        for(let prop in obj) {
            //if prop in properties continue, else delete.
            if(!obj.hasOwnProperty(prop)) delete obj[prop];
        }
    }

}
module.exports = User;