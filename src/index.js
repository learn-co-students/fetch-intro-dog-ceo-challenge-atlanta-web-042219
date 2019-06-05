console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
  fetchImages()
  fetchBreeds()
  const dropdown = document.querySelector('#breed-dropdown')
  dropdown.addEventListener("change", handleDropDown)
})

function fetchImages(){
  return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(obj => addPic(obj.message))
}

function addPic(pics) {
  const div = document.querySelector('#dog-image-container')
  pics.forEach(pic => {
    const img = document.createElement('img')
    img.src = pic
    div.appendChild(img)
  })
}

function fetchBreeds(filter=undefined) {
  const ul = document.querySelector('#dog-breeds')
  ul.innerHTML = ''
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(obj => {
    for(breed in obj.message){
      if(!filter || breed.startsWith(filter)) {
        li = document.createElement('li')
        li.addEventListener('click', function(e){
          e.target.style.color = 'red'
        })
        li.innerText = breed    
        ul.appendChild(li)
      }
    }
  })
}


function handleDropDown(e) {
  fetchBreeds(e.target.value)
}

// const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// function fetchBreeds(filter=undefined){
//   let container = document.querySelector('#dog-breeds')
//   container.innerHTML = ''
//   fetch(breedUrl)
//   .then(res => res.json())
//   .then(json => {
//     for(breed in json.message){
//       if(!filter || breed.startsWith(filter)){
//         let breedElement = document.createElement('li')
//         breedElement.innerText = breed
//         container.appendChild(breedElement)
//         breedElement.addEventListener('click', function(e){
//             e.target.style.color = 'red'
//           })
//       }
//     }
//   })
// }