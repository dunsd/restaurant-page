import doughKnead from './images/doughKnead.jpg';
import croqueMonsieur from "./images/croque-monsieur.jpg";
import croissant from "./images/croissant.jpg";
import frenchOnion from "./images/french-onion-soup.jpg";

const menuPage = function() {
    const content = document.querySelector('#content');
    const mainDiv = document.querySelector('.mainDiv');
    mainDiv.className = "mainDiv";

    const menuContent = document.createElement('div');
    const menuHeader = document.createElement('h2');
    const menuPara = document.createElement('p');

    menuHeader.className = "menuHeader";
    menuContent.className = "menuContent";
    menuPara.className = "menuPara";

    menuHeader.textContent = "Welcome to the menu!";
    menuPara.textContent = "Here are some of our finest delicasies:";
    mainDiv.appendChild(menuHeader);
    mainDiv.appendChild(menuPara);
    mainDiv.appendChild(menuContent);

    createMenuItem(croqueMonsieur, "Croque Monsieur", "£10.99", "A Croque Monsieur");
    createMenuItem(croissant, "Croissant", "£3", "A Croissant");
    createMenuItem(frenchOnion, "French Onion Soup", "£14.99", "A French Onion Soup");

}

function createMenuItem(image, name, price, alt){
    const mainDiv = document.querySelector('.mainDiv');
    mainDiv.className = "mainDiv";
    const menuItem = document.createElement('div');
    menuItem.className = "menuItem";
    const newImageContainer = document.createElement('figure');
    newImageContainer.className = "menuImageContainer";
    const newMenuImage = document.createElement('img');
    const newMenuCaption = document.createElement('figcaption');
    newMenuCaption.textContent = `${name}: ${price}`;
    menuItem.appendChild(newImageContainer);
    newImageContainer.appendChild(newMenuImage);
    newImageContainer.appendChild(newMenuCaption);
    newMenuImage.className = "menuImage";
    newMenuImage.src = image;
    newMenuImage.alt = alt;

    mainDiv.appendChild(menuItem);
}

export default menuPage;