"use strict";

async function loadNotes(url) {
    let response = await fetch(url);
    if(response.status != 200) return [];
    return await response.json();
}

async function loadTags(url) {
    let response = await fetch(url);
    if(response.status != 200) return [];
    return await response.json();
}

async function loadTagM2O(url) {
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
//------- Notes -------
function loadMyNotes(url, noteList, onSuccess, onError) {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(noteList));
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

function DeleteMyNote(url, onSuccess, onError) {
    let xhr = new XMLHttpRequest();

    xhr.open('DELETE', url);
    xhr.send();
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

function updateMyNote(url, noteList, onSuccess, onError) {
    let xhr = new XMLHttpRequest();

    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(noteList));
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

//------- Tags -------
function loadMyTags(url, tagList, onSuccess, onError) {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(tagList));
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

function DeleteMyTag(url, onSuccess, onError) {
    let xhr = new XMLHttpRequest();

    xhr.open('DELETE', url);
    xhr.send();
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

//------- Users -------
function validateUser(url, userinfo, onSuccess, onError) {
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(userinfo));
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

