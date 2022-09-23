  // // Typed Animations

  var developerString = document.querySelector("#typed-heading");
  var options = {
    strings: ['Web Dev^3000', 'UX Research^3000', 'Web Design^3000'],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
  };
  var typed = new Typed(developerString, options);

  // Skill Cloud Animation

  const myTags3 = [
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
     '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
     '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
     '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
  ];
  var tagCloud2 = TagCloud('.home-cloud-bg', myTags3, {

    radius: 1200,

    direction: 340,

    keep: false
  });

  const myTags4 = [
    'Illustrator', 'Photoshop', 'Figma', 'After Effects', 'Premiere Pro', 'Java', 'HTML', 'CSS', 'JavaScript', 'React.js', "Node.js", "three.js"
  ];
  var tagCloud2 = TagCloud('.skill-cloud-main', myTags4, {

    radius: 500,

    direction: 600,

    keep: false
  });