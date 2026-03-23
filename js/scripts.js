document.addEventListener("DOMContentLoaded", () => {
    let exampleJsonString = '{"movie":"Lilo & Stitch","description":"A young Hawaiian girl named Lilo adopts what she thinks is a dog, only to discover he is an alien experiment named Stitch. Their journey explores the meaning of family, friendship, and belonging.","image":"https://otcwebdev.net/images/liloandstitch.webp","setting":{"primary":"Hawaii","secondary":"Outer Space","keyLocations":["Kauai","Nani\'s House","Galactic Federation Headquarters"]},"characters":["Lilo","Stitch","Nani","Dr. Jumba","Agent Pleakley"]}';
    
let movieImage = document.getElementById("movieImage");
let movieTitle = document.getElementById("movieTitle");
let movieDescription = document.getElementById("description");
let settingPrimary = document.getElementById("primary");
let settingSecondary = document.getElementById("secondary");
let locationsList = document.getElementById("locationsList");
let charactersList = document.getElementById("charactersList");


let movieObject = JSON.parse(exampleJsonString);

movieTitle.innerText = movieObject.movie;
movieDescription.innerText = movieObject.description;

settingPrimary.innerText = movieObject.setting.primary;
settingSecondary.innerText = movieObject.setting.secondary;

movieImage.src = movieObject.image;
movieImage.alt = "Young Hawaiin girl and blue alien surf on a wave. Yellow text on the left: Disney: Lilo and Stitch";

movieObject.setting.keyLocations.forEach(location => {
    let li = document.createElement("li");
    li.innerText = location;
    locationsList.appendChild(li);
});

movieObject.characters.forEach(location => {
    let li = document.createElement("li");
    li.innerText = location;
    charactersList.appendChild(li);
});

})