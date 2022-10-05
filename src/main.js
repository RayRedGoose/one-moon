// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import "./css/styles.css";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/bg-color.jpeg";

// IMPORTS
var bookings = require("./data/bookings");
var User = require("./User");

// DOM elements
var loginButton = document.getElementById("user-login-form");

// Event Listeners
loginButton.addEventListener("click", login);

// Functions
function login(event) {
  event.preventDefault();
}
