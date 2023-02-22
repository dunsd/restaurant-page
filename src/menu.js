const menuPage = function() {
    const content = document.querySelector('#content');
    const mainDiv = document.querySelector('.mainDiv');
    console.log("Menu Page");

    const menuContent = document.createElement('div');
    const menuHeader = document.createElement('h2');
    const menuPara = document.createElement('p');

    menuHeader.className = "menuHeader";
    menuContent.className = "menuContent";
    menuPara.className = "menuPara";

    menuHeader.textContent = "Welcome to the menu page!";
    menuPara.textContent = "An explanation of the menu page!";
    mainDiv.appendChild(menuHeader);
    mainDiv.appendChild(menuPara);
    mainDiv.appendChild(menuContent);

}

export default menuPage;