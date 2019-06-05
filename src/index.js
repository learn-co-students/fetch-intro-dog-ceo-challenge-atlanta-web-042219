document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#dog-breeds').addEventListener('click', handleChangeColor)
  // document.getElementById('breed-dropdown').addEventListener('change', handleLetterSelect)
    fetchPictures()
    fetchBreeds()
  }
)



function fetchPictures(){
  return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response){
    return response.json();
    // console.log("here is the", response.json())
  })
  .then(function(object){
      (addPictures(object));
      // console.log("Hello!!", object)
      // console.log(JSON.stringify(object))
    })
  .catch((error)=>console.log("error", error))
}


function addPictures(object){
  const dogs = object.message
  // console.log(dogs)
  dogs.forEach(dog => {
    addNewPicture(dog)
    // console.log(dog)
  })
}


function addNewPicture(image){
  const image_gallery = document.querySelector('#dog-image-container')
  const div = document.createElement('div')
  div.className = 'card'
  const img = document.createElement('img')
  img.src = image
  div.appendChild(img)
  image_gallery.appendChild(div)
}

function fetchBreeds(){
  return fetch("https://dog.ceo/api/breeds/list/all")
  .then(function(response){
    return response.json();
    // console.log("here is the", response.json())
  })
  .then(function(object){
      (getAllBreeds(object));
      // console.log(JSON.stringify(object))
    })
  .catch((error)=>console.log("error", error))
}


function getAllBreeds(object){
  const breeds = object.message

  // handleLetterSelect(breeds)

  for (const key in breeds){
    addNewBreed(key)
  }
}


// function filterBreeds(object){
//   const array = []
  // console.log(object)
  // return array
// }


function addNewBreed(breed){
  const breed_list = document.querySelector('#dog-breeds')
  const li = document.createElement('li')
  li.innerText = breed
  breed_list.appendChild(li)
}

function handleChangeColor(e){
  e.target.style.color = "red"
}

// function handleLetterSelect(e) {
//   console.log("target", e.target.value)
//   console.log("letter select", e)
  // if (e.target.childNodes.value === "a") {
  //   console.log("whoa")
  // }
// }
