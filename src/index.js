import './styles.css';
import {generateFirstPage} from './generatePage.js';
import homePage from './home.js';
import clear from './clear';
import aboutPage from './about';
import menuPage from './menu';

const content = document.querySelector('#content');


generateFirstPage();
const homeButton = document.querySelector('.homeButton');
const menuButton = document.querySelector('.menuButton');
const aboutButton = document.querySelector('.aboutButton');

homeButton.addEventListener('click', () => {
    clear();
    homePage();
});

menuButton.addEventListener('click', () => {
    console.log("menu page");
    clear();
    menuPage();
})

aboutButton.addEventListener('click', () => {
    console.log("about page");
    clear();
    aboutPage();
})

