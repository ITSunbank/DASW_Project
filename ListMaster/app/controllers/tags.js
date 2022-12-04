"use strict";

class TagException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class Tag {
    constructor(title, description) {
        this._uuid = Tag.generateUUID();
        this.title = title;
        this.description = description;
    }

    get uuid() {
        return this._uuid;
    }
    get title() {
        return this._title; //_para no hacer recursividad.
    }
    get description() {
        return this._description;
    }

    set uuid(value) {
        throw new TagException("Tag UUIDs are auto-generated.");
    }
    set title(value) {
        if(typeof value !== 'string' || value === '') {
            throw new TagException("Invalid title for the Tag");
        }
        this._title = value;
    }
    set description(value) {
        if(typeof value !== 'string' || value === '') {
            throw new TagException("Tag description is not valid.");
        }
        this._description = value;
    }

    static generateTag(tag) {
        let title = tag.title != undefined ? tag.title : tag._title;
        let description = tag.description != undefined ? tag.description : tag._description;

        return new Tag(title, description);
    }

    static generateUUID() {
        let uid = '';
        for (let i = 0; i < 10; i++) {
            uid += Math.trunc(Math.random() * 10);
        }
        return uid;
    }

}
module.exports = Tag;