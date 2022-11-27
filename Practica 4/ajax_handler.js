"use strict";

async function loadNotes(url) {
    let response = await fetch(url);
    if(response.status != 200) return [];
    return await response.json();
}

function getXhrResponse(xhr, onSuccess, onError) {
    if(xhr.status == 200) {
        onSuccess(xhr.responseText);
    } else {
        onError(xhr.status + ': ' + xhr.statusText);
    }
}