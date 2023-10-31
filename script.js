// Function - a random dog image
function getRandomDogImage() {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

// Function - imagesource
function setImageSource(imageUrl) {
    const dogImage = document.getElementById('dog-image');
    dogImage.src = imageUrl;
}

// Function - click event
function handleButtonClick() {
    getRandomDogImage()
        .then(data => {
            const imageUrl = data.message;
            setImageSource(imageUrl);
        })
        .catch(error => {
            console.error('Error fetching random dog image:', error);
        });
}

// click event listener to the button
const fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', handleButtonClick);
