const modal = document.querySelector('#check-number')
const checkIn = document.querySelector('#check-in')
const searchNumber = document.querySelector('#number-input')
const closeModal = document.querySelector('#close')
const cancelModal = document.querySelector('.btn-close')
const patientDropdown = document.querySelector('#patients-dropdown')
const dropdownList = document.querySelector('#patient-list')
const serviceDropdown = document.querySelector('#services-dropdown')
const serviceList = document.querySelector('#service-list')

searchNumber.onclick = function () {
    modal.style.display = 'block'
  }

// closeModal.onclick = function () {
//     modal.style.display = 'none'
//   }

  // cancelModal.onclick = function () {
  //   modal.style.display = 'none'
  //   }

    window.onclick = function (event) {
        if(event.target === modal){
        modal.style.display = 'none'
    } else if(event.target === patientDropdown) {
      dropdownList.style.display = 'none'
    }
      }

      patientDropdown.onclick = function () {
        dropdownList.style.display = 'block'
        }

        
      serviceDropdown.onclick = function () {
        serviceList.style.display = 'block'
        }