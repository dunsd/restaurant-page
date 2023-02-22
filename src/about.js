const aboutPage = function() {
    const content = document.querySelector('#content');
    const mainDiv = document.querySelector('.mainDiv');
    console.log("About Page");

    const aboutContent = document.createElement('div');
    const aboutHeader = document.createElement('h2');
    const aboutPara = document.createElement('p');

    aboutHeader.className = "aboutHeader";
    aboutContent.className = "aboutContent";
    aboutPara.className = "aboutPara";

    aboutHeader.textContent = "Welcome to the about page!";
    aboutPara.textContent = "An explanation of the about page!";
    mainDiv.appendChild(aboutHeader);
    mainDiv.appendChild(aboutPara);
    mainDiv.appendChild(aboutContent);

}

export default aboutPage;