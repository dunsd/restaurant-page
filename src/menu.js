import doughKnead from './images/doughKnead.jpg';
import croqueMonsieur from "./images/croque-monsieur.jpg";

const menuPage = function() {
    const content = document.querySelector('#content');
    const mainDiv = document.querySelector('.mainDiv');
    mainDiv.className = "mainDiv";

    const menuContent = document.createElement('div');
    const menuHeader = document.createElement('h2');
    const menuPara = document.createElement('p');

    const imageContainer = document.createElement('figure');
    imageContainer.className = "menuImageContainer";
    const backgroundImage = document.createElement('img');
    const backgroundImageCaption = document.createElement('figcaption');
    backgroundImageCaption.textContent = "Image by Nadya Spetnitskaya";
    imageContainer.appendChild(backgroundImage);
    imageContainer.appendChild(backgroundImageCaption);
    backgroundImage.className = "menuImage";
    backgroundImage.src = doughKnead;
    backgroundImage.alt = "Dough being kneaded";

    menuHeader.className = "menuHeader";
    menuContent.className = "menuContent";
    menuPara.className = "menuPara";

    menuHeader.textContent = "Welcome to the menu page!";
    menuPara.textContent = "An explanation of the menu page!";
    mainDiv.appendChild(menuHeader);
    mainDiv.appendChild(menuPara);
    mainDiv.appendChild(menuContent);
    mainDiv.appendChild(imageContainer);

    //createMenuItem();

}

function createMenuItem(image, text, price){
    const newImageContainer = document.createElement('figure');
    newImageContainer.className = "menuImageContainer";
    const newMenuImage = document.createElement('img');
    const newMenuCaption = document.createElement('figcaption');
    newMenuCaption.textContent = "Testing";
    newImageContainer.appendChild(newMenuImage);
    newImageContainer.appendChild(newMenuCaption);
    newMenuImage.className = "menuImage";
    newMenuImage.src = doughKnead;
    newMenuImage.alt = "Test alt";

    mainDiv.appendChild(newImageContainer);
}

export default menuPage;