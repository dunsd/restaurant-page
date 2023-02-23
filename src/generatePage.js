import homePage from "./home";



const links = document.createElement('div');
links.className = "links";
const homeButton = document.createElement('button');
const menuButton = document.createElement('button');
const aboutButton = document.createElement('button');
homeButton.className = "homeButton";
menuButton.className = "menuButton";
aboutButton.className = "aboutButton";
homeButton.textContent = "Home";
menuButton.textContent = "Menu";
aboutButton.textContent = "About";


function generateFirstPage() {

    const content = document.querySelector('#content');
    const leftSide = document.createElement('div');
    const rightSide = document.createElement('div');
    const mainContent = document.createElement('div');
    leftSide.className = ('leftSide');
    mainContent.className = ('mainContent');
    rightSide.className = ('rightSide');

    const mainDiv = document.createElement('div');
    mainDiv.className = "mainDiv";

    content.textContent = "";
    createHeader();
    content.appendChild(leftSide);
    content.appendChild(mainContent);
    content.appendChild(rightSide);
    mainContent.appendChild(links);
    links.appendChild(homeButton);
    links.appendChild(menuButton);
    links.appendChild(aboutButton);
    mainContent.appendChild(mainDiv);
    homePage();
}

function createHeader() {
    const header = document.createElement('div');
    const nameBanner = document.createElement('h1');
    header.className = ('header');
    nameBanner.textContent = "Le Resto du reve";
    
    content.appendChild(header);
    header.appendChild(nameBanner);

}

export { generateFirstPage};