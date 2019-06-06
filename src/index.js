document.addEventListener('DOMContentLoaded', function (){

  console.log('%c HI', 'color: firebrick')

  // document.querySelector('#breed-dropdown').addEventListener('select', console.log("um are you working or nah?", fetchImages()))


    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(res => {
      let images = res.message
      images.forEach(image => addNewImage(image))
    })


    // .then((data)=> addImages(data))
    // .catch((error)=>console.log("It didn't work."))

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(res => {
      let breeds = res.message
      for (let [key, value] of Object.entries(breeds)) {
    addNewBreed(key)};
    })



})

// let images = imageArray()

function addImages(){
  imageArray.forEach(img => {addNewImage(img)})
}


function addNewImage(image){
  let dogContainer = document.querySelector('#dog-image-container')

  const img = document.createElement("img")
  img.src = image

  dogContainer.appendChild(img)

}

function addNewBreed(key){
  let breedList = document.querySelector('#dog-breeds')
  const li = document.createElement('li')
  li.innerHTML = key

  breedList.appendChild(li)

  // aTag = document.createElement("a")

  // li.appendChild(aTag)

  // aTag.innerHTML = key

  li.addEventListener('click', changeColor, false)
}

function changeColor(e) {
  console.log(e.target)
  e.target.style = "color:gray"
}
