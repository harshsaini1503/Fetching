document.getElementById('fetchData').addEventListener('click', fetchData);

function fetchData() {
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = 'Fetching data...';

    // Fetching a random dog image from the Dog API
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Displaying the image
            dataDiv.innerHTML = `<img src="${data.message}" alt="Random Dog Image">`;
        })
        .catch(error => {
            // Handling errors
            dataDiv.innerHTML = `Error: ${error.message}`;
        });
}
