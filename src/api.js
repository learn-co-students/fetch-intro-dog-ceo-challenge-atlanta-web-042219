function fetchImages(){
  return fetch('https://dog.ceo/api/breeds/image/random/4').then(res => res.json())
}

// function imageArray(img){
//   return fetch('https://dog.ceo/api/breeds/image/random/4',{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(img)
//   })
//   .then((res)=>res.json())
// }
