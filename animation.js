var square = document.querySelector('.square');
var squareAnimation = anime({
    targets: square,
    top: [
        {value: "1400px", duration: 6000},
        {value: "-200px", duration: 6000}
    ],
    left: [
        {value: "300px", duration: 6000},
        {value: "1000px", duration: 6000}
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

var triangle = document.querySelector();