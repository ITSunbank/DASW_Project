"use strict";

const { generateUUID } = require("./utils");

class NoteException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class Note {
    constructor(title, tag, description) {
        this._uuid = generateUUID();
        this.title = title;
        this.tag = tag;
        this.description = description;
    }

    get uuid() {
        return this._uuid;
    }
    get title() {
        return this._title; //_para no hacer recursividad.
    }
    get tag() {
        return this._tag;
    }
    get description() {
        return this._description;
    }

    set uuid(value) {
        throw new NoteException("Note UUIDs are auto-generated.");
    }
    set title(value) {
        // if(typeof value !== 'string' || value === '') {
        //     throw new NoteException("Invalid title for the note");
        // }
        this._title = value;
    }
    set tag(value) {
        // if(typeof value !== 'int') {
        //     throw new NoteException("Tag name is invalid.");
        // }
        this._tag = value;
    }
    set description(value) {
        // if(typeof value !== 'string' || value === '') {
        //     throw new NoteException("Invalid description for the note");
        // }
        this._description = value;
    }

//------- Funciones estAticas -------

    static createFromJson(jsonValue) {  //MEtodos que pertenecen a la clase, no al objeto, eso es el static. Para poder hacer un Note.cleanObject() por ejemplo.
        let obj = JSON.parse(jsonValue);
        return Note.createFromObject(obj);
    }

    static createFromObject(obj) {
        let newNote = {};
        Object.assign(newNote, obj); //This will clone original object, but also handle possible non-object values.
        Note.cleanObject(newNote);

        //Convert from newNote to Note instance
        let note = new Note(newNote._title, newNote._tag, newNote._description);

        if('_uuid' in newNote) {
            note._uuid = newNote._uuid;
        }

        return note;
    }

    static cleanObject(obj) {
        //Verify that we only contain the desired properties
        let properties = ['_uuid', '_title', '_tag', '_description'];
        for(let prop in obj) {
            if(!obj.hasOwnProperty(prop)) delete obj[prop];
        }
    }
}

module.exports = Note;