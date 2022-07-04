var peakPos = document.getElementById('peak').getBoundingClientRect().top;
var gsuPos = document.getElementById('gsu').getBoundingClientRect().top;
var miscPos = document.getElementById('misc').getBoundingClientRect().top;

var scrollPos = 0;
console.log(peakPos)
console.log(gsuPos)
console.log(miscPos)

var peakNav = document.getElementById('peakNav');
var gsuNav = document.getElementById('gsuNav');
var miscNav = document.getElementById('miscNav');

window.addEventListener('scroll', function (event) {

    scrollPos = this.scrollY;

    console.log(scrollPos)
    if (scrollPos <= peakPos && scrollPos <= gsuPos && scrollPos <= miscPos) {
        peakNav.classList.remove("dot");
        gsuNav.classList.remove("dot");
        gsuNav.classList.remove("dot");
    }
    if (scrollPos >= peakPos && scrollPos <= gsuPos && scrollPos <= miscPos) {
        peakNav.classList.add("dot");
        gsuNav.classList.remove("dot");
        gsuNav.classList.remove("dot");
    }
    if (scrollPos >= peakPos && scrollPos >= gsuPos && scrollPos <= miscPos) {
        peakNav.classList.remove("dot");
        gsuNav.classList.add("dot");
        miscNav.classList.remove("dot");
    }
    if (scrollPos >= peakPos && scrollPos >= gsuPos && scrollPos >= miscPos) {
        peakNav.classList.remove("dot");
        gsuNav.classList.remove("dot");
        miscNav.classList.add("dot");
    }
});