"use strict";

let tag1 = new Tag("DASW", "Pendientes de la materia de web");

let tag2 = new Tag("GBD", "Pendientes del proyecto de bases de datos");


let nota1 = new Note("Front-end", 0,
    "Terminar las vistas del front-end del proyecto.");

let nota2 = new Note("Instancia Cassandra", 1,
    "Terminar de realizar la configuración de la instancia para comenzar la práctica");


createTag(tag1);
createTag(tag2);
createNote(nota1);
createNote(nota2);


console.table(getTags());
console.table(getNotes());

//updateNote(nota1._uuid, silla2);
//updateTag(tag1._uuid, tag2);

//console.table(getTags());
//console.table(getNotes());

// deleteTag(tag1._uuid);
// deleteNote(nota1._uuid);

//console.table(getTags());
//console.table(getNotes());