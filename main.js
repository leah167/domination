// Part One - Querying DOM Elements

function strikeThrough() {
    const strike = document.querySelector("li");
    strike.style.setProperty("text-decoration", "line-through")
    // OR 
    // strike.style.textDecoration = "line-through"

    
}
strikeThrough();
// strikeThrough(); ask why calling it again doesn't strike out the next one.


function setImage(imageId, imageSrc) {
    const image = document.querySelector(imageId)
    image.src = imageSrc
    image.style.height = "300px"
    image.style.width = "300px"
    image.style.margin = "10px"
}
setImage("#image-1", "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
setImage("#image-2" , "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
setImage("#image-3", "https://images.pexels.com/photos/460635/pexels-photo-460635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");

function removes() {
    const removeFirst = document.querySelector('li');
    removeFirst.remove();
    
}
removes();
removes();

function changeTextSize(size, textId ) {

    const newTextSize = document.getElementById(textId);
    newTextSize.style.fontSize = size;

    
}
changeTextSize("100px", "heading");
changeTextSize("15px", "thing-c");

// Part Two - DOM Elements as Function Parameters

function appendsArgs(domElement) {
    const unorderedList = document.getElementById('arguments');
    unorderedList.appendChild(domElement);
    
}

const imgElement = document.createElement("img");
imgElement.src = "https://cdn.fanbyte.com/wp-content/uploads/2019/09/flower-crown-eevee-guide-pokemon-go.jpg?x87749"

appendsArgs(imgElement);

function makeSmall(imageElement) {

    
    imageElement.style.height = "30px";
    
}
makeSmall(imgElement);

function makeInvisible(domElement) {

    // const changeClass = document.querySelector(domElement); *cannot create element inside funciton.
    domElement.className = "invisible";
    
}
//has to become a DOM element here to pass into function
let headingOne = document.querySelector('h1'); 
makeInvisible(headingOne);

// Part Three - Creating DOM Elements

function addToList(text) {
    const newListItem = document.createElement("li");
    newListItem.innerText = text;
    return newListItem;
}
const newDomElement = addToList("I choose you..");
const newDomElement2 = addToList("Eevee!");

appendsArgs(newDomElement);
appendsArgs(newDomElement2);

function newHeader(size, text) {
    const makeNew = document.createElement("h" + size);
    makeNew.innerText = text;
    return makeNew
    
}
const header = newHeader("3", "Gotta catch 'em all!");
const header2 = newHeader("2", "Cherry Blossoms");

appendsArgs(header);
appendsArgs(header2);