"use strict";

class NoteException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class Note {
    constructor(title, tag, description) {
        this._uuid = Note.generateUUID();
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
        this._title = value;
    }
    set tag(value) {
        this._tag = value;
    }
    set description(value) {
        this._description = value;
    }

    static generateNote(note) {
        let title = note.title != undefined ? note.title : note._title;
        let tag = note.tag != undefined ? note.tag : note._tag;
        let description = note.description != undefined ? note.description : note._description;

        return new Note(title, tag, description);
    }

    static generateUUID() {
        let uid = '';
        for (let i = 0; i < 10; i++) {
            uid += Math.trunc(Math.random() * 10);
        }
        return uid;
    }

}

module.exports = Note;