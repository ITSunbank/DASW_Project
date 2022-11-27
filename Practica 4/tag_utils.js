"use strict";

function tagToHtml(tag) {
    return `
    <table class="default mx-md-4 mt-md-4">
        <tr>
            <td>
                <h4 class="list-item" style="color:green; font-family:Montserrat; font-weight: bold;">${tag._title}</h4>
                
                <p class="list-item" style="font-family:Montserrat; font-weight: bold;">${tag._description}</p>
            </td>
            <td class="allign right"><button type="button" class="btn btn-primary active mx-md-4 "><i
                        class="fa fa-edit" data-toggle="modal" data-target="#edittag"></i></td>
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
    <option>${tag._title}</option>`
}

function tagListToHTMLM2O(tagList) {
    let tagContainerM2O = document.getElementById('tagM2O');
    tagContainerM2O.innerHTML = tagList.map(tagToHtmlM2O).join("\n") + '\n';
    console.log(getElementById('tagM2O'))
}

loadTagM2O(tagsUrl).then(tag => {
    tagListToHTMLM2O(tag);
});

loadTagM2O(tagsUrl);






