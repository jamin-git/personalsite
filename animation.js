// Script Not Being Used Currently

var square = document.querySelector('.square');
var squareAnimation = anime({
    targets: square,
    top: [
        {value: "15%", duration: 6000},
        {value: "-15%", duration: 6000}
    ],
    left: [
        {value: "5%", duration: 6000},
        {value: "0", duration: 6000}
    ],
    rotateZ: [
        {value: "360", duration: 12000},
    ],
    easing: 'easeInOutSine',
    loop: true
});

var circle = document.querySelector(".circle");
var circleAnimation = anime({
    targets: circle,
    top: [
        {value: "-200px", duration: 4500},
        {value: "1300px", duration: 7500}
    ],
    easing: 'easeInOutSine',
    loop: true
});

var bSquare = document.querySelector(".bSquare");
var bSquareAnimation = anime({
    targets: bSquare,
    translateX: [
        {value: 100, duration: 2000},
    ],
    translateY: [
        {value: 100, duration: 2000},
    ],
});