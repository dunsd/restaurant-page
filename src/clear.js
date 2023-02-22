const clear = function(){
    const mainDiv = document.querySelector('.mainDiv');
    while(mainDiv.firstChild){
        mainDiv.removeChild(mainDiv.firstChild);
    }
}

export default clear;