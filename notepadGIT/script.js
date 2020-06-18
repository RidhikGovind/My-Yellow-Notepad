//grabbing the elements
const body = document.body;
const input = document.querySelector('input[type=text]');
const overlay = document.querySelector('.overlay');

//functions
function showNotepad() {
    body.classList.add('show-notepad');
}


function closeNotepad() {
    
    body.classList.remove('show-notepad');
}

//adding event listeners
input.addEventListener('focusin',showNotepad);
input.addEventListener('focusout',closeNotepad);



//*********************************************
const listedNotes     = document.querySelector('.listed-notes');
const notepadForm     = document.querySelector('.notepad-form');
const btn             = document.querySelector('button');
const listedNoteInput = notepadForm.querySelector('input[type=text]');
const notepads        = JSON.parse(localStorage.getItem('notepads')) || [];



function createNotepad(e) {
    e.preventDefault(); //preventdefault is used here bcz normally when we submit..the page refreshes but here the 'new bookmark' is created hence thats the ultimate purpose.

    //add a new note to notepads
    const content = listedNoteInput.value;
    const note = {       //creating note object and inputting the 'value' to content.
    content: content  
    };

    notepads.push(note);
    fillListedNotes(notepads);
    storeListedNotes(notepads);


    notepadForm.reset();
    console.table(notepads);
  }
 
  
function fillListedNotes(notepads = []) {

    let notepadHTML = ' ';
    for(let i=0; i<notepads.length; i++) {
        notepadHTML += ` 
        <a href="#" class="note" data-id="${i}">
             ${notepads[i].content}
             <i class="fas fa-times btn-remove"></i> 
        </a>
        `;   //using backticks here
    }  //here keepig the btn-remove inside the <a> is very important.
   
    listedNotes.innerHTML = notepadHTML;
}   


function storeListedNotes(notepads = []){
    localStorage.setItem('notepads', JSON.stringify(notepads));
    
}


function removeBtnRemove(e) {
    if(e.target.matches('.btn-remove')) {
        
    //find the index 
    //remove from the listedNotes using splice() 
    //fill the list
    //store back to localstorage

    const index = e.target.parentNode.dataset.id;
    console.log(index);
    const splice = notepads.splice(index, index.length); 
    fillListedNotes(notepads);
    storeListedNotes(notepads);
    console.log(splice);

} }

    //add the event listeners
    btn.addEventListener('click', createNotepad);
    listedNotes.addEventListener('click', removeBtnRemove);