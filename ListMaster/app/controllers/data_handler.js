"use strict";
//------- Notes -------
const Note = require('./../models/note');



function getNotes(req, res) {
    Note.find({})
        .then(notes => res.status(200).json(notes))
        .catch(err => res.status(400).send(err));
}

function getNoteById(req, res) {
    let uuid = req.params.uuid;

    Note.findOne({'uuid': `${uuid}`})
        .then(note => res.status(200).json(note))
        .catch(err => res.status(400).send(err));
}

function createNote(req, res) {
    let note = Note(req.body);
    note.save()
        .then(note => {
            res.type('text/plain')
            res.send(`Note ${note.title} was created!`)
        })
        .catch(err => res.status(400).send(err));
}

function updateNote(req, res) {
    let tit = req.params.title;
    let updatedNote = req.body;
    for (let property in updatedNote) {
        if (['title', 'tag', 'description'].includes(property)) continue;
        delete updatedNote[property];
    }

    Note.findOneAndUpdate({title: tit}, updatedNote, {new: true}).then(note => {
        res.type('text/plain; charset=utf-8');
        res.send(`Note ${note.title} was updated!`);
    });
}

function deleteNote(req, res) {
    let tit = req.params.title;

    Note.findOneAndDelete({title: tit}).then(note => {
        res.type('text/plain; charset=utf-8');
        res.send(note != undefined ? `Note ${tit} was deleted!` : `No note with title ${tit} was found!`);
    });
}

exports.getNotes = getNotes;
exports.getNoteById = getNoteById;
exports.createNote = createNote;
exports.updateNote = updateNote;
exports.deleteNote = deleteNote;



//------- Tags -------
const Tag = require('./../models/tag');

function getTags(req, res) {
    Tag.find({})
        .then(tags => res.status(200).json(tags))
        .catch(err => res.status(400).send(err));
}

function getTagById(req, res) {
    let uuid = req.params.uuid;

    Tag.findOne({
            'uuid': `${uuid}`
        })
        .then(tag => res.status(200).json(tag))
        .catch(err => res.status(400).send(err));
}

function createTag(req, res) {
    let tag = Tag(req.body);
    tag.save()
        .then(tag => {
            res.type('text/plain')
            res.send(`Tag ${tag._title} was created!`)
        })
        .catch(err => res.status(400).send(err));
}

function updateTag(req, res) {
    let tit = req.params.title;
    let updatedTag = req.body;
    for (let property in updatedTag) {
        if (['title', 'description'].includes(property)) continue;
        delete updatedTag[property];
    }

    Tag.findOneAndUpdate({title: tit}, updatedTag, {new: true}).then(tag => {
        res.type('text/plain; charset=utf-8');
        res.send(`Tag ${tag.title} was updated!`);
    });
}

function deleteTag(req, res) {
    let tit = req.params.title;

    Tag.findOneAndDelete({title: tit}).then(tag => {
        res.type('text/plain; charset=utf-8');
        res.send(tag != undefined ? `Tag ${tit} was deleted!` : `No tag with id ${tit} was found!`);
    });
}

exports.getTags = getTags;
exports.getTagById = getTagById;
exports.createTag = createTag;
exports.updateTag = updateTag;
exports.deleteTag = deleteTag;

//------- Users -------
const User = require('./../models/user');

function login(req, res) {
    let email = req.body.correo;
    let password = req.body.contraseña;
    console.log("LOGIN")

    console.log(email)
    console.log(password)
    User.findOne({ correo: `${email}` })
        .then(user => {
            console.log(user)
            let token = user.generateToken(password);
           
            if (token != undefined) {
                res.status(200)
                res.set('Content-Type', 'text/plain; charset=utf-8');
                res.send(token);
            } else {
                res.status(404);            
                res.set('Content-Type', 'text/plain; charset=utf-8');
                res.send(`Wrong email or password`);
            }
        })
        .catch(err => {
            res.status(404);            
            res.set('Content-Type', 'text/plain; charset=utf-8');
            res.send(`Wrong email or password`);
        });
}

function getUsers(req, res) {
    User.find({})
        .then(users => res.status(200).json(users))
        .catch(err => res.status(400).send(err));
}

function getUserByEmail(req, res) {
    let login = false;
    let email = req.params.correo;
    let password = req.params.contraseña;

    User.findOne({
            'correo': `${email}`
        })
        .then(user => res.status(200).json(user))
        .then(login = true)
        .catch(err => res.status(400).send(err));
    if(login == true) {
            
        User.findOne({
            'contraseña': `${password}`
        })
        .then(user => res.status(200).json(user))
        .then(login = true)
        .catch(err => res.status(400).send(err));
    }


}

function createUser(req, res) {
    let user = User(req.body);
    user.save()
        .then(user => {
            res.type('text/plain')
            res.send(`User ${user._nombre} was created!`)
        })
        .catch(err => res.status(400).send(err));
}

function updateUser(req, res) {
    let email = req.params.email;
    let updatedUser = req.body;
    for (let property in updatedUser) {
        if (['nombre', 'apellido', 'correo', 'contraseña'].includes(property)) continue;
        delete updatedUser[property];
    }

    User.findOneAndUpdate({email: `${email}`}, updatedUser, {new: true}).then(user => {
        res.type('text/plain; charset=utf-8');
        res.send(`User ${user.firstName} was updated!`);
    });
}

function deleteUser(req, res) {
    let email = req.params.email;

    User.findOneAndDelete({email: `${email}`}).then(user => {
        res.type('text/plain; charset=utf-8');
        res.send(user != undefined ? `User ${user.firstName} was deleted!` : `No user with email ${email} was found!`);
    });
}


const jwt = require("jsonwebtoken");
let privateKey = 'ABC123#';

const verifyToken = (req, res, next) => {
    let token = req.get("x-auth");
    if (token == undefined) {
        return res.status(403).send("Missing token");
    }
    jwt.verify(token, privateKey, (err, decoded) => {
        if (err) return res.status(401).send("Invalid Token");
        req.userInfo = decoded;
        return next();
    });
};



exports.verifyToken = verifyToken;



exports.login = login;
exports.getUsers = getUsers;
exports.getUserByEmail = getUserByEmail;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;