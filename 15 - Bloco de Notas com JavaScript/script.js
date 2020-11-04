const addButton = document.querySelector('.add');
const notesContainer = document.querySelector('.notes');

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes) {
  notes.forEach(note => {
    addNewNote(note);
  })
}

function addNewNote(noteText = '') {
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = ` 
    <div class="tools">
      <button class="edit">
        <i class="fas ${noteText ? 'fa-edit' : 'fa-save'}"></i>
      </button>
      <button class="delete">
        <i class="fas fa-trash"></i>  
      </button>
    </div>
    <div class="main ${noteText ? '' : 'hidden'}"></div>
    <textarea class="${noteText ? 'hidden' : ''}"></textarea>`;

  const markedText = note.querySelector('.main');
  const textEditor = note.querySelector('textarea');
  const editButton = note.querySelector('.edit');
  const deleteButton = note.querySelector('.delete');

  editButton.addEventListener('pointerdown', () => {
    editIcon = editButton.querySelector('i');
    
    markedText.classList.toggle('hidden');
    textEditor.classList.toggle('hidden');

    editIcon.classList.toggle('fa-save');
    editIcon.classList.toggle('fa-edit');
    
    editButton.removeEventListener('pointerdown', this);
  });
  
  textEditor.value = noteText;
  markedText.innerHTML = marked(noteText);

  textEditor.addEventListener('input', (event) => {
    const { value } = event.target;
    markedText.innerHTML = marked(value);
    updateLocalStorage();
    textEditor.removeEventListener('input', this);
  });

  deleteButton.addEventListener('pointerdown', () => {
    note.remove();
    updateLocalStorage();
    deleteButton.removeEventListener('pointerdown', this);
  })

  notesContainer.appendChild(note);
}

function updateLocalStorage() {
  const notesText = document.querySelectorAll('textarea');
  const notes = [];
  notesText.forEach(note => {
    notes.push(note.value);
  });
  localStorage.setItem('notes', JSON.stringify(notes));
}

addButton.addEventListener('pointerdown', () => {
  addNewNote();
  addButton.removeEventListener('pointerdown', this);
})