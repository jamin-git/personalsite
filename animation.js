  // // Typed Animations

  var developerString = document.querySelector("#typed-heading");
  var options = {
    strings: ['Web Dev^3000', 'UX Research^3000', 'UX Design^3000', 'Web Design^3000'],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
  };
  var typed = new Typed(developerString, options);


// Skills Text
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 5;
ml4.durationIn = 1600;
ml4.durationOut = 1200;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-4',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-4',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-5',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-5',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  });


  var ml5 = {};
ml5.opacityIn = [0,1];
ml5.scaleIn = [0.2, 1];
ml5.scaleOut = 5;
ml5.durationIn = 1500;
ml5.durationOut = 1200;
ml5.delay = 600;

anime.timeline({loop: true,
                delay: 300,})
  .add({
    targets: '.ml5 .letters-1',
    opacity: ml5.opacityIn,
    scale: ml5.scaleIn,
    duration: ml5.durationIn
  }).add({
    targets: '.ml5 .letters-1',
    opacity: 0,
    scale: ml5.scaleOut,
    duration: ml5.durationOut,
    easing: "easeInExpo",
    delay: ml5.delay
  }).add({
    targets: '.ml5 .letters-2',
    opacity: ml5.opacityIn,
    scale: ml5.scaleIn,
    duration: ml5.durationIn
  }).add({
    targets: '.ml5 .letters-2',
    opacity: 0,
    scale: ml5.scaleOut,
    duration: ml5.durationOut,
    easing: "easeInExpo",
    delay: ml5.delay
  }).add({
    targets: '.ml5 .letters-3',
    opacity: ml5.opacityIn,
    scale: ml5.scaleIn,
    duration: ml5.durationIn
  }).add({
    targets: '.ml5 .letters-3',
    opacity: 0,
    scale: ml5.scaleOut,
    duration: ml5.durationOut,
    easing: "easeInExpo",
    delay: ml5.delay
  }).add({
    targets: '.ml5 .letters-4',
    opacity: ml5.opacityIn,
    scale: ml5.scaleIn,
    duration: ml5.durationIn
  }).add({
    targets: '.ml5 .letters-4',
    opacity: 0,
    scale: ml5.scaleOut,
    duration: ml5.durationOut,
    easing: "easeInExpo",
    delay: ml5.delay
  }).add({
    targets: '.ml5 .letters-5',
    opacity: ml5.opacityIn,
    scale: ml5.scaleIn,
    duration: ml5.durationIn
  }).add({
    targets: '.ml5 .letters-5',
    opacity: 0,
    scale: ml5.scaleOut,
    duration: ml5.durationOut,
    easing: "easeInExpo",
    delay: ml5.delay
  });