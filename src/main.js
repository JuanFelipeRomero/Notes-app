
//Date code
let dateLabel = document.getElementById("dateLabel");
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

dateLabel.innerHTML = `Dia ${day} del mes ${month} de ${year}`;


//------------------------------------------------------------------------------------
let inputNote = document.getElementById("inputNote");
let textarea = document.getElementById("textarea");
let addBtn = document.getElementById("addBtn");
let notesGrid = document.getElementById("notes_grid");

function showTextarea () {
    textarea.style.display = "block";
    inputNote.placeholder = "Title";
    inputNote.style.borderRadius= "28px 28px 0 0";
    inputNote.style.border = "2px solid rgb(211, 211, 211)";
    inputNote.style.borderBottom = "none";
    inputNote.style.textDecoration = "none";
}

function hideTextarea () {
    textarea.style.display = "none";
    inputNote.placeholder = "Take a note...";
    inputNote.style.borderRadius = "28px";
    inputNote.style.border = "2px solid rgb(211, 211, 211)";
    inputNote.style.textDecoration = "none";
}

inputNote.addEventListener('focus', showTextarea);
textarea.addEventListener('focus', showTextarea);

inputNote.addEventListener('blur', function() {
    // Use a timeout to delay the check, allowing the focus shift to process (if any)
    setTimeout(() => {
        if (document.activeElement !== textarea && document.activeElement !== addBtn) {
            hideTextarea();
        }
    }, 0);
});

// Hide textarea when focus is lost from both inputNote and textarea
textarea.addEventListener('blur', function() {
    // Check if the related target of the blur event is not inputNote
    if (document.activeElement !== inputNote && document.activeElement ==! addBtn) {
        hideTextarea();
    }
});

/* ------------------------------------------------------------------------------------ */

function AddNote() {
    let noteTitleData = inputNote.value;
    let noteContentData = textarea.value;
    console.log(noteTitleData);
    console.log(noteContentData);

    const noteContainer = document.createElement('div');
    noteContainer.classList.add("note")

    const noteTitle = document.createElement('h3');
    noteTitle.classList.add('note__title');
    noteTitle.append(noteTitleData);

    const noteContent = document.createElement('p');
    noteContent.classList.add('note__content');
    noteContent.append(noteContentData);

    noteContainer.append(noteTitle, noteContent);
    notesGrid.append(noteContainer);

    inputNote.value = "";
    textarea.value = "";
    hideTextarea();
}

addBtn.addEventListener('click', AddNote);

