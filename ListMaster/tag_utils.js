"use strict";

function tagToHtml(tag) {
    return `
    <table class="default mx-md-4 mt-md-4" id="zoom">
        <tr>
            <td>
                <h4 class="list-item" style="color:green; font-family:Montserrat; font-weight: bold;">${tag.title}</h4>
                <p class="list-item1" style="font-family:Montserrat; font-weight: bold;">${tag.description}</p>
            </td>
            <td class="allign right">
                <button type="button" class="btn btn-danger mx-md-1" onclick="removeTag('${tag.title}')"><i
                class="fa fa-trash"></i>
            </td>
            <td class="allign right">
            <button class="btn btn-primary mx-md-1" id="editTags"><i onclick="openmodal('${tag.title}')"
            class="fa fa-pencil-square"></i>

            </td>
        </tr>
    </table>`
}

function tagListToHTML(tagList) {
    let tagContainer = document.getElementById('mainTagList');
    tagContainer.innerHTML = '<div class="row mt-5">' + tagList.map(tagToHtml).join("\n") + '\n</div>';
}

loadTags(tagsUrl).then(tags => {
    tagListToHTML(tags);
});

loadTags(tagsUrl);

//------- Many2One ------- 

function tagToHtmlM2O(tag) {
    return `
    <option>${tag.title}</option>`
}

function tagListToHTMLM2O(tagList) {
    let tagContainerM2O = document.getElementById('tagM2O');
    tagContainerM2O.innerHTML = tagList.map(tagToHtmlM2O).join("\n") + '\n';
}

function tagListToHTMLM2O2(tagList) {
    let tagContainerM2O = document.getElementById('etagM2O');
    tagContainerM2O.innerHTML = tagList.map(tagToHtmlM2O).join("\n") + '\n';

}

loadTagM2O(tagsUrl).then(tag => {
    tagListToHTMLM2O(tag);
    tagListToHTMLM2O2(tag);
});

loadTagM2O(tagsUrl);

//------- Add Tag -------
document.getElementById('tagbtn').addEventListener("click",function(){
    let tag = {
        title : document.getElementById("tagname").value,
        description : document.getElementById("descTag").value
    }
    loadMyTags(tagsUrl, tag, tags => {
        tag.tags = tags;
        location.href = 'Etiquetas.html';
    });
});

// Para editar
function openmodal(title2){
    $('#edittag').modal('show');
    document.getElementById('etagbtn').addEventListener("click",function(){
    let tag = {
        title : document.getElementById("ename").value,
        description : document.getElementById("edescTag").value
    }
    updateMyNote(tagsUrl + title2, tag, tags => {
        tag.tags = tags;
        location.href='Etiquetas.html';
    });
})
}

function removeTag(title) {
    // get delete modal user email and remove it from the server
    DeleteMyTag(tagsUrl + title, (msg) => console.log(msg), (err) => console.log(err));
    location.href = 'Etiquetas.html';
}





