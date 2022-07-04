  // Typed Animations

  var developerString = document.querySelector("#developer-heading");
  var options = {
    strings: ['development^5000'],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
  };
  var typed = new Typed(developerString, options);


  // Shape Animations

  var introSquare = document.querySelector("#intro-square");
  var introSquareAnimation = anime({
    targets: introSquare,
    left: '2000px',
    width: '300px',
    height: '300px',
    rotate: 180,
    easing: "linear",
    duration: 10000,
    delay: 500,
    loop: true
  });

  var introCircle = document.querySelector("#intro-circle");
  var introCircleAnimation = anime({
    targets: introCircle,
    right: '2000px',
    top: "-150px",
    width: "300px",
    height: "300px",
    easing: "linear",
    duration: 12000,
    delay: 1000,
    loop: true
  });

  var introTriangle = document.querySelector("#intro-triangle");
  var introTriangleAnimation = anime({
    targets: introTriangle,
    left: '1500px',
    top: '-500px',
    width: '300px',
    height: '300px',
    rotate: 180,
    easing: "linear",
    duration: 10000,
    delay: 1500,
    direction: "reverse",
    loop: true
  });

  // Skill Cloud Animation

  const myTags = [
    'Java', 'HTML', 'CSS', 'JavaScript', 'React.js', "Node.js"
  ];
  var tagCloud = TagCloud('.skill-cloud-development', myTags, {

    radius: 350,

    direction: 135,

    keep: false
  });

  const myTags2 = [
    'Illustrator', 'Photoshop', 'Figma', 'After Effects', 'Premiere Pro'
  ];
  var tagCloud2 = TagCloud('.skill-cloud-design', myTags2, {

    radius: 350,

    direction: 135,

    keep: false
  });