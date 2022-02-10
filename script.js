console.log("hello world");

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

function disappear() {
    let circle = document.getElementById("circle3");
    circle.classList.toggle("hidden");
}