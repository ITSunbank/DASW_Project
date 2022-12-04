"use strict";

// const Note = require('./../ListMaster/app/models/note');

function noteToHtml(note) {
    return `
    <div class="card">
        <img class="card-img-top" id="zoom" style="height:150px;" src="https://th.bing.com/th/id/OIP.CTOWMdntrL0Vnt-xvgzIoAHaE7?w=263&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Imagen 1">
        <div class="card-body">
            <h4 class="card-title">${note.title}</h4>
            <div class="atributos"></div>
            <p class="card-text">#${note.tag} <i class="fa fa-check" style="color:green"></i></p>
            <p class="card-text">${note.description} <i class="fa fa-check" style="color:green"></i></p>
            <button class="btn btn-danger mx-md-1" id="delnote" onclick="removeNote('${note.title}')"><i class="fa fa-trash"></i></button>
            <button class="btn btn-primary mx-md-1" id="editNotes" onclick="openmodal('${note.title}')"><i class="fa fa-pencil-square"></i>
        </div>
    </div>`
}


function noteListToHTML(noteList) {
    let noteContainer = document.getElementById('mainList');
    noteContainer.innerHTML = '<div class="row mt-5">' + noteList.map(noteToHtml).join("\n") + '\n</div>';
}

loadNotes(notesUrl).then(notes => {
    let n = notes;
    noteListToHTML(n);
});

loadNotes(notesUrl);

document.getElementById('notebtn').addEventListener("click",function(){
    let note = {
        title : document.getElementById("notename").value,
        tag : document.getElementById("tagM2O").value,
        description : document.getElementById("descNote").value
    }
    loadMyNotes(notesUrl, note, notes => {
        note.notes = notes;
        location.href='MisNotas.html';
    });
})

// Para editar
function openmodal(title2){
    $('#editNote').modal('show');
    document.getElementById('enotebtn').addEventListener("click",function(){
    let note = {
        title : document.getElementById("enotename").value,
        tag : document.getElementById("etagM2O").value,
        description : document.getElementById("edescNote").value
    }
    updateMyNote(notesUrl + title2, note, notes => {
        note.notes = notes;
        location.href='MisNotas.html';
    });
})
}

function removeNote(title) {
    // get delete modal user email and remove it from the server
    DeleteMyNote(notesUrl + title, (msg) => console.log(msg), (err) => console.log(err));
    location.href='MisNotas.html';
}
