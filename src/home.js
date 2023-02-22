const homePage = function() {
    const content = document.querySelector('#content');
    const mainDiv = document.querySelector('.mainDiv');
    console.log("Home Page");

    const homeContent = document.createElement('div');
    const homeHeader = document.createElement('h2');
    const homePara = document.createElement('p');

    homeHeader.className = "homeHeader";
    homeContent.className = "homeContent";
    homePara.className = "homePara";

    homeHeader.textContent = "Welcome to the main page!";
    homePara.textContent = "An explanation of the main page!";
    mainDiv.appendChild(homeHeader);
    mainDiv.appendChild(homePara);
    mainDiv.appendChild(homeContent);

}

export default homePage;