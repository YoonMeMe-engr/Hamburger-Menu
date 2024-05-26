const humbergerMenuContainerTag =document.querySelector(".humbergerMenuContainer");
const humburgerline1Tag = document.querySelector(".line1");
const humburgerline2Tag = document.querySelector(".line2");
const humburgerline3Tag = document.querySelector(".line3");
const overLayMenuTag = document.querySelector(".overLayMenu");
const liTags = document.getElementsByTagName("li");

humbergerMenuContainerTag.addEventListener("click" , () => {
    if (humbergerMenuContainerTag.classList.contains("isOpened")) {
        overLayMenuTag.classList.remove("showOverLayMenu");
        humburgerline2Tag.classList.remove("hideLine2");
        humburgerline1Tag.classList.remove("rotatePlus45Deg");
        humburgerline3Tag.classList.remove("rotateMinus45Deg");
        humbergerMenuContainerTag.classList.remove("isOpened");
        for ( let i = 0; i < liTags.length; i ++ ) {
            liTags[i].classList.remove("moveLiTagUp");
        }
    } 
    else {
        overLayMenuTag.classList.add("showOverLayMenu");
        humburgerline2Tag.classList.add("hideLine2");
        humburgerline1Tag.classList.add("rotatePlus45Deg");
        humburgerline3Tag.classList.add("rotateMinus45Deg");
        humbergerMenuContainerTag.classList.add("isOpened");
        for ( let i = 0; i < liTags.length; i ++ ) {
            liTags[i].classList.add("moveLiTagUp");
        }
    }
});