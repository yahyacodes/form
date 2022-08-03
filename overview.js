const overView = document.querySelector('#overview')
const overViewSection = document.querySelector('#overview-section')
const notes = document.querySelector('#notes')
const notesSection = document.querySelector('#notes-section')
const addNotes = document.querySelector('#add-notes')
const addComment = document.querySelector('#add-comment')
const btnClose = document.querySelector('.btn-close')
const btnCancel = document.querySelector('#close')
const transaction = document.querySelector('#transaction')
const procedures = document.querySelector('#procedures')
const appointments = document.querySelector('#appointments')
const prescriptions = document.querySelector('#prescriptions')
const labTests = document.querySelector('#lab-tests')
const checkInHistory = document.querySelector('#history')

overViewSection.style.display = 'block'
notesSection.style.display = 'none'

overView.onclick = function () {
    overViewSection.style.display = 'block'
    notesSection.style.display = 'none'
}

notes.onclick = function () {
    notesSection.style.display = 'block'
    overViewSection.style.display = 'none'
}

addNotes.onclick = function () {
    addComment.style.display = 'block'
  }

  btnClose.onclick = function () {
    addComment.style.display = 'none'
  }

  btnCancel.onclick = function () {
    addComment.style.display = 'none'
  }

  window.onclick = function (event) {
    if(event.target === addComment) {
        addComment.style.display = 'none'
    }
  }