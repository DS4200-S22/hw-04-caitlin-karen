console.log("hello world");

let clicked = 0;
function count() {
    let circleText = document.getElementById("count");
    clicked++;
    circleText.innerHTML = "clicked: " + clicked;
}

function border() {
    let circle = document.getElementById("circle2");
    circle.classList.add("border");
    circle.classList.remove("borderless");
}

function borderless() {
    let circle = document.getElementById("circle2");
    circle.classList.add("borderless");
    circle.classList.remove("border");
}

let appeared = true;
function disappear() {
    let circle = document.getElementById("circle3");

    if (appeared) {
        circle.style.opacity = 0;
        appeared = false;
    }
    else {
        circle.style.opacity = 1;
        appeared = true;    
    }

}