document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    // Fetch dog images and display them
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imagesContainer = document.getElementById('dog-image-container');
            imagesContainer.innerHTML = data.message.map(imageUrl => `<img src="${imageUrl}">`).join('');
        })
        .catch(error => console.log(error));

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedsContainer = document.getElementById('dog-breeds');
            breedsContainer.innerHTML = Object.keys(data.message).map(breed => `<li>${breed}</li>`).join('');
        })
        .catch(error => console.log(error));

    const breedsContainer = document.getElementById('dog-breeds');
    breedsContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue'; // Change color to your preference
        }
    });

    const filterDropdown = document.getElementById('breed-dropdown');
    filterDropdown.addEventListener('change', function(event) {
        const selectedLetter = event.target.value.toLowerCase();
        Array.from(breedsContainer.getElementsByTagName('li')).forEach(breed => {
            breed.style.display = breed.textContent.toLowerCase().startsWith(selectedLetter) ? 'list-item' : 'none';
        });
    });
});
