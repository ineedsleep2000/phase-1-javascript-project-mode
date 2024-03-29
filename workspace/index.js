//DOM here
//fetching data here
// function fetchData() {
//   const response = fetch("http://localhost:3000/stuff");
//   const stuffAndThings = response.json();
// }

//I put a button in the body of the html file, heres the listener
//click event listener
const buttonElement = document.getElementById("aButton");
buttonElement.addEventListener("click", onClick);
//on click an alert pops up
function onClick() {
  alert("Hello! You clicked a button!");
  buttonElement.classList.toggle("flip");
  alert("the text flipped click it again!");
}
//   alert("OH NO THE BUTTON!!!");
//   buttonElement.remove();
//   alert("atleast the other buttons still here");
// }

//double click event listener
const imageElement = document.getElementById("image1");

addEventListener("dblclick", (event) => {
  alert("ayo dont delete me too!");
  imageElement.remove();
});
//mouse over event listener
const myDiv = document.getElementById("myDiv");

myDiv.addEventListener("mouseover", function () {
  myDiv.style.backgroundColor = "lightblue";
  myDiv.textContent = "Mouse over me!";
  alert("ayo! you just moused over my button!");
  myDiv.remove();
  alert("OH NO MY BUTTONS GONE!");
});

// document.addEventListener("DOMContentLoaded", function () {
//   const imageContainer = document.getElementById("#image-menu");

//   // Fetch data from db.json using Fetch API
//   fetch("http://localhost:3000/stuff")
//     .then((response) => response.json())
//     .then((data) => {
//       // Iterate through the images array in the data
//       data.images.forEach((image) => {
//         // Create an image element
//         const img = document.createElement("img");
//         img.src = stuff.url; // Set the image source
//         img.alt = `Image ${stuff.id}`; // Set alt attribute for accessibility
//         img.classList.add("image"); // Add CSS class for styling

//         // Append the image to the image container
//         imageContainer.appendChild(img);
//       });
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// });
