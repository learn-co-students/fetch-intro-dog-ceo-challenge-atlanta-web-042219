document.addEventListener('DOMContentLoaded', function() {
	dog_img_request(2)
	dog_breed_request()
	document.querySelector('#breed-dropdown').addEventListener('change', filter_doggers)
})

// CHALLENGE 1

function dog_img_request(num=1) {
	return fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
	.then(resp => resp.json())
	.then(json => json.message.forEach(add_dogger))
	// .catch(error => console.log('api_request() ERROR: ', error))
}

function add_dogger(url) {
	let img = document.createElement('img')
	img.src = url
	img.id  = 'dog_img'
	document.querySelector('div#dog-image-container').appendChild(img)
}

// CHALLENGE 2

function dog_breed_request() {
	return fetch('https://dog.ceo/api/breeds/list/all')
	.then(resp => resp.json())
	.then(json => {
		for(breed in json.message) {
			add_breed(breed)
		}
	})
	// .catch(error => console.log('api_request() ERROR: ', error))
}

function add_breed(breed) {
	let li = document.createElement('li')
	li.innerText = breed
	li.addEventListener('click', change_color)
	document.querySelector('#dog-breeds').appendChild(li)
}

// CHALLENGE 3

colors = ['red', 'aquamarine', 'coral', 'crimson', 'DarkKhaki', 'DodgerBlue','AliceBlue','AntiqueWhite','Aqua','Aquamarine','Azure','Beige','Bisque','BlanchedAlmond','Blue','BlueViolet','Brown','BurlyWood','CadetBlue','Chartreuse','Chocolate']

function change_color(e) {
	e.target.style=`color: ${colors[Math.floor(Math.random()*colors.length)]};`
}

// CHALLENGE 4

function filter_doggers(e) {
	let ul = document.querySelector('#dog-breeds')
	let list_items = ul.children

	for(let k=0; k<list_items.length; k++){
		list_items[k].hidden = ( list_items[k].innerText[0] === e.target.value ? false : true )
		if (e.target.value === 'none') { list_items[k].hidden = false }
	}
}
