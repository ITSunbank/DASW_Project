"use strict";
//------- Notes -------

const fs = require('fs');
const Note = require('./notes');

let content = fs.readFileSync('./app/data/notes.json');
const notes = JSON.parse(content).map(Note.createFromObject);

function getNotes() {
    return notes;
}

function getNoteById(uuid) {
    for(let i=0 ; i<notes.length ; i++) {
        if(notes[i]._uuid == uuid) {
            return notes[i];
        }
    }
}

function createNote(newNote) {
    let note = Note.createFromObject(newNote);
    notes.push(note);
    fs.writeFileSync('./app/data/notes.json', JSON.stringify(notes));
    return note;
}

function updateNote(uuid, newNote) {
    for(let i=0 ; i<notes.length ; i++) {
        if(notes[i]._uuid == uuid) {
            Object.assign(notes[i], newNote);
            fs.writeFileSync('./app/data/notes.json', JSON.stringify(notes));
            return notes[i];
        }
    }
    return -1;

}

function deleteNote(uuid) {
    for(let i=0 ; i<notes.length ; i++) {
        if(notes[i]._uuid == uuid) {
            let deleted = notes[i];
            notes.splice(i, 1);
            fs.writeFileSync('./app/data/notes.json', JSON.stringify(notes));

            return deleted;
        }
    } 
    return -1;
}

exports.getNotes = getNotes;
exports.getNoteById = getNoteById;
exports.createNote = createNote;
exports.updateNote = updateNote;
exports.deleteNote = deleteNote;


//------- Tags -------
const Tag = require('./tags');

let content2 = fs.readFileSync('./app/data/tags.json');
let tags = JSON.parse(content2).map(Tag.createFromObject);

function getTags() {
    return tags;
}

function getTagById(uuid) {
    for(let i=0 ; i<tags.length ; i++) {
        if(tags[i]._uuid == uuid) {
            return tags[i];
        }
    }
}

function createTag(newTag) {
    let tag = Tag.createFromObject(newTag);
    tags.push(tag);
    
    fs.writeFileSync('./app/data/tags.json', JSON.stringify(tags));
    return tag;  
}

function updateTag(uuid, newTag) {
    for(let i=0 ; i<tags.length ; i++) {
        if(tags[i]._uuid == uuid) {
            Object.assign(tags[i], newTag);
            fs.writeFileSync('./app/data/tags.json', JSON.stringify(tags));
            return tags[i];
        }
        
    }
    return -1;

}

function deleteTag(uuid) {
    for(let i=0 ; i<tags.length ; i++) {
        if(tags[i]._uuid == uuid) {
            let deleted = tags[i];
            tags.splice(i, 1);
            fs.writeFileSync('./app/data/tags.json', JSON.stringify(tags));

            return deleted;
        }
    } 
    return -1;
}

exports.getTags = getTags;
exports.getTagById = getTagById;
exports.createTag = createTag;
exports.updateTag = updateTag;
exports.deleteTag = deleteTag;

//------- Users -------
const User = require('./users');

let content3 = fs.readFileSync('./app/data/users.json');
let users = JSON.parse(content3).map(User.createFromObject);

function getUsers() {
    return users;
}

function getUserById(uuid) {
    for(let i=0 ; i<users.length ; i++) {
        if(users[i]._uuid == uuid) {
            return users[i];
        }
    }
}

function createUser(newUser) {
    let user = User.createFromObject(newUser);
    users.push(user);
    
    fs.writeFileSync('./app/data/users.json', JSON.stringify(users));
    return user;  
}

function updateUser(uuid, newUser) {
    for(let i=0 ; i<users.length ; i++) {
        if(users[i]._uuid == uuid) {
            Object.assign(users[i], newUser);
            fs.writeFileSync('./app/data/users.json', JSON.stringify(users));
            return users[i];
        }
        
    }
    return -1;

}

function deleteUser(uuid) {
    for(let i=0 ; i<users.length ; i++) {
        if(users[i]._uuid == uuid) {
            let deleted = users[i];
            users.splice(i, 1);
            fs.writeFileSync('./app/data/users.json', JSON.stringify(users));
            return deleted;
        }
    } 
    return -1;
}


exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser= deleteUser;

