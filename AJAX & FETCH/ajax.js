// AJAX

document.querySelector('#btn').addEventListener('click', () => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', "https://dog.ceo/api/breeds/image/random", true);

    xhr.onload = () => {
        let response = JSON.parse(xhr.responseText);

        let image = document.createElement('img');

        image.setAttribute('src', response.message);
        image.style.width = "250px"
        image.style.height = "250px"
        document.querySelector('#doggy').append(image);
    }

    xhr.send()
});