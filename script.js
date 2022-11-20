let turtleDiv = document.querySelector(".content1");
let rabbitDiv = document.querySelector(".content2");

let turtleButton = document.querySelector(".content1 a");
let rabbitButton = document.querySelector(".content2 a");

function expandTurtle() {
  turtleDiv.style.flex = 7;
  turtleButton.classList.add("active");
  rabbitDiv.style.flex = 3;
  rabbitButton.classList.remove("active");
}

function expandRabbit() {
  turtleDiv.style.flex = 3;
  turtleButton.classList.remove("active");
  rabbitDiv.style.flex = 7;
  rabbitButton.classList.add("active");
}

function returnBasics() {
  turtleDiv.style.flex = 1;
  turtleButton.classList.remove("active");
  rabbitDiv.style.flex = 1;
  rabbitButton.classList.remove("active");
}

turtleDiv.addEventListener("mouseenter", expandTurtle);
turtleDiv.addEventListener("mouseleave", returnBasics);

rabbitDiv.addEventListener("mouseenter", expandRabbit);
rabbitDiv.addEventListener("mouseleave", returnBasics);
// ###########################################################
// ###########################################################
// #################### - UDEMY SOLUTION - ###################
// ###########################################################
// ###########################################################

/*
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
*/
