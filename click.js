// Portfolio Clicking

function showWBD() {
    var imgs = [
        {src: "img/porfolio/full/wbdFull.png"}
    ]
    Spotlight.show(imgs, { 
        title: "Search Engine Optimization Research Project - Warner Brothers Discovery - Summer 2022",
        description: "5 Week User Experience Research Sprint",
        fit: "contain"})
}

function showECO() {
    var imgs = [
        {src: "img/porfolio/full/ecoFull.png"}
    ]
    Spotlight.show(imgs, {
        title: "Restaurt Menu Redesign - User Interface Design - Georgia Tech - Summer 2021",
        description: "Semester long project @ Georgia Tech",
        fit: "contain"
    })
}


function showWBD2() {
    Fancybox.defaults.Image = { fit: "contain-w", }
    Fancybox.show([
        {
            src: "img/porfolio/full/wbdFull.png",
            type: "image",
        },
    ]);
}

function showECO2() {
    Fancybox.defaults.Image = { fit: "contain-w", }
    Fancybox.show([
        {
            src: "img/porfolio/full/ecoFull.png",
            type: "image",
        },
    ]);
}

function showWBD3() {
    var img1 = document.createElement("img");
    img1.src = "img/porfolio/full/wbdFull.png";
    const viewer = new Viewer(img1, [{

    }]);
    viewer.show();
}

function showECO3() {

}