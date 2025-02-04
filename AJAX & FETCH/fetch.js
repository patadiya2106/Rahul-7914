document.querySelector('#btn').addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => {
            console.log("Res ===>", res);
            return res.json()
        })

        .then((data) => {
            console.log(data);
            let response = data
            let image = document.createElement('img');
            image.setAttribute('src', response.message);
            image.style.width = "400px"
            image.style.height = "400px"
            document.querySelector('#doggy').prepend(image)
        })
        .catch((err) => {
            console.log(err);

        })
})