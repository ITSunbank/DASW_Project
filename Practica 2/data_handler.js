"use strict";
//------- Notes -------
const notes = [];

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
    notes.push(notes.createFromObject(newNote));
}

function updateNote(uuid, newNote) {
    for(let i=0 ; i<notes.length ; i++) {
        if(notes[i]._uuid == uuid) {
            notes[i] = newNote;
        }
    }

}

function deleteNote(uuid) {
    for(let i=0 ; i<notes.length ; i++) {
        if(notes[i]._uuid == uuid) {
            notes.splice(i, 1);
            break;
        }
    } 
}

//------- Tags -------
const tags = [];

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
    tags.push(tags.createFromObject(newTag));
}

function updateTag(uuid, newTag) {
    for(let i=0 ; i<tags.length ; i++) {
        if(tags[i]._uuid == uuid) {
            tags[i] = newTag;
        }
    }

}

function deleteTag(uuid) {
    for(let i=0 ; i<tags.length ; i++) {
        if(tags[i]._uuid == uuid) {
            tags.splice(i, 1);
            break;
        }
    } 
}
