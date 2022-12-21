let result = document.querySelector('#result');

document.querySelector('button').addEventListener('click', function onSearch() {
    result.innerHTML = "";
let wordSearch = document.querySelector('#gifSearch').value;
let gifArr = [];

fetch(`https://api.giphy.com/v1/gifs/search?api_key=oO0S56e3H26e9wFHx3kTkkBvuSEuEjYY&q=${wordSearch}&limit=5&offset=0&rating=g`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayGif (data); 
})
.catch(error => console.log(error));  

function displayGif (data) {
data.data.forEach(element => {gifArr.push(element.images.original.url);
});
for (let i=0; i < gifArr.length; i++) {
    result.innerHTML += `<img src="${gifArr[i]}">`
};
}    
});