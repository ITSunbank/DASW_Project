"use strict";

const { generateUUID } = require("./utils");

class TagException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class Tag {
    constructor(title, description) {
        this._uuid = generateUUID();
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

//------- Funciones estAticas -------

    static createFromJson(jsonValue) {  //MEtodos que pertenecen a la clase, no al objeto, eso es el static. Para poder hacer un Tag.cleanObject() por ejemplo.
        let obj = JSON.parse(jsonValue);
        return Tag.createFromObject(obj);
    }

    static createFromObject(obj) {
        let newTag = {};
        Object.assign(newTag, obj); //This will clone original object, but also handle possible non-object values.
        Tag.cleanObject(newTag);

        //Convert from newTag to Tag instance
        let tag = new Tag(newTag._title, newTag._description);

        if('_uuid' in newTag) {
            tag._uuid = newTag._uuid;
        }
        return tag;
    }

    static cleanObject(obj) {
        //Verify that we only contain the desired properties
        let properties = ['_uuid', '_title', '_description'];
        for(let prop in obj) {
            //if prop in properties continue, else delete.
            if(!obj.hasOwnProperty(prop)) delete obj[prop];
        }
    }

}
module.exports = Tag;