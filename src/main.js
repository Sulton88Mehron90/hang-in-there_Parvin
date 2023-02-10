// query selector variables go here 👇

var randomPosterImg = document.querySelector('.poster-img')
var randomPosterTitle = document.querySelector('.poster-title')
var randomPosterQuote = document.querySelector('.poster-quote')
var posterGrid = document.querySelector('.saved-posters-grid');

var viewForm = document.querySelector('.poster-form');
var viewHome = document.querySelector('.main-poster');
var savedPage = document.querySelector('.saved-posters');

var randomPosterBtn = document.querySelector('.show-random')
var makePosterBtn = document.querySelector('.show-form');
var backToMainBtn = document.querySelector('.back-to-main');
var takeMeBackBtn = document.querySelector('.show-main');
var savePosterViewBtn = document.querySelector('.show-saved');
var showUserPosterBtn = document.querySelector('.make-poster')

var userURL = document.querySelector('#poster-image-url')
var userTitle = document.querySelector('#poster-title')
var userQuote = document.querySelector('#poster-quote')

// we've provided you with some data to work with 👇

var savedPosters = [];
var currentPoster;

// event listeners go here 👇

window.addEventListener('load', randomPoster)
randomPosterBtn.addEventListener('click', randomPoster)
makePosterBtn.addEventListener('click', changeViewToForm);
savePosterViewBtn.addEventListener('click', viewSavedPoster);
backToMainBtn.addEventListener('click', changeViewToHome);
takeMeBackBtn.addEventListener('click', changeViewToHome);
showUserPosterBtn.addEventListener('click', function(event) {
  makeMyPoster()
  event.preventDefault()
})


// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomPoster() {
currentPoster = new Poster(images[getRandomIndex(images)], titles[getRandomIndex(titles)], quotes[getRandomIndex(quotes)])
addPosterToDom()  
}

function addPosterToDom() {
randomPosterImg.src = currentPoster.imageURL
randomPosterTitle.innerText = currentPoster.title
randomPosterQuote.innerText = currentPoster.quote
}

function makeMyPoster() {
currentPoster = new Poster(userURL.value, userTitle.value, userQuote.value)
images.push(userURL.value)
titles.push(userTitle.value)
quotes.push(userQuote.value)
changeViewToHome()
addPosterToDom()
}

function changeViewToForm(){
viewForm.classList.remove('hidden');
viewHome.classList.add('hidden');
}
function viewSavedPoster (){
savedPage.classList.remove('hidden');
viewHome.classList.add('hidden');

}
function changeViewToHome(){
viewHome.classList.remove('hidden');
viewForm.classList.add('hidden');
savedPage.classList.add('hidden');
}
