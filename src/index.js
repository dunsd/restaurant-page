import './styles.css';
import {generateFirstPage, mainMenu} from './generatePage.js';
import homePage from './home.js';
import clear from './clear';

const content = document.querySelector('#content');


generateFirstPage();
const homeButton = document.querySelector('.homeButton');
const menuButton = document.querySelector('.menuButton');
const aboutButton = document.querySelector('.aboutButton');

homeButton.addEventListener('click', function(){
    clear();
    //homePage();
});



