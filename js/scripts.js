const divButton = document.getElementById("switch");
divButton.addEventListener("click", darkMode);

function darkMode(){
    let element = document.body;
    element.classList.toggle("dark-mode");
    let text = document.getElementById("dark-on-off");
    if (text.innerHTML === " Light") {
        document.getElementsByTagName("i")[0].removeAttribute("class");
        divButton.setAttribute("class", "fas fa-moon")
        text.innerHTML = " Dark";
    } else {
        document.getElementsByTagName("i")[0].removeAttribute("class");
        // divButton.removeAttribute("class", "fas fa-moon")
        divButton.setAttribute("class", "fas fa-sun")
        text.innerHTML = " Light";
    }
}

// hoverover the mouse to change name from english to Chinese
const chineseName = document.getElementById("myname");
chineseName.addEventListener("mouseover", mouseOver);
chineseName.addEventListener("mouseout", mouseOut);

function mouseOver() {
    chineseName.innerHTML = "倪靖涵";
  }
  
function mouseOut() {
    chineseName.innerHTML = "Jinghan Ni";
  }