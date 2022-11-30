"use strict";

function noteToHtml(note) {
    return `
    <div class="card">
        <img class="card-img-top" id="zoom" style="height:150px;" src="https://th.bing.com/th/id/OIP.CTOWMdntrL0Vnt-xvgzIoAHaE7?w=263&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Imagen 1">
        <div class="card-body">
            <h4 class="card-title">${note._title}</h4>
            <div class="atributos"></div>
            <p class="card-text">#${note._tag} <i class="fa fa-check" style="color:green"></i></p>
            <p class="card-text">${note._description} <i class="fa fa-check" style="color:green"></i></p>
            <button class="btn btn-danger mx-md-1" id="delnote" onclick="removeNote('${note._uuid}')"><i class="fa fa-trash"data-toggle="modal" data-target="#deleteNote" ></i></button>
        </div>
    </div>`
}

function noteListToHTML(noteList) {
    let noteContainer = document.getElementById('mainList');
    noteContainer.innerHTML = '<div class="row mt-5">' + noteList.map(noteToHtml).join("\n") + '\n</div>';
}

loadNotes(notesUrl).then(notes => {
    noteListToHTML(notes);
});

loadNotes(notesUrl);

document.getElementById('notebtn').addEventListener("click",function(){
    let note = {
        _title : document.getElementById("notename").value,
        _tag : document.getElementById("tagM2O").value,
        _description : document.getElementById("descNote").value
    }
    loadMyNotes(notesUrl, note, notes => {
        note.notes = notes;
        window.location.href = 'MisNotas';
    });
})

function removeNote(uuid) {
    // get delete modal user email and remove it from the server
    DeleteMyNote(notesUrl + uuid, (msg) => console.log(msg), (err) => console.log(err));
}

