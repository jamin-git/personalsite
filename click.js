// Portfolio Clicking

function showWBD2() {
    Fancybox.Plugins.Toolbar.defaults.items.plan = {
        type: "div",
        label: "Study Plan",
        html: "<a href=https://drive.google.com/file/d/1FG14rdDOmmH-l1Rtz8BiUkIzGW1Tf_WR/view?usp=sharing target=_blank class=small-text>Study Plan</a>",
    }
    Fancybox.show([
        {
            src: "img/porfolio/full/wbdFull.png",
            type: "image",
        }
    ], {
        Toolbar: {
            display: [
              { id: "prev", position: "center" },
              { id: "counter", position: "center" },
              { id: "next", position: "center" },
              { id: "plan", position: "center" },
              "zoom",
              "slideshow",
              "fullscreen",
              "thumbs",
              "close",]},
        click: null,
        dragToClose: false,
        groupAttr : true,
        on: {
          "done": (fancybox, slide) => {
            const panzoom = slide.Panzoom;
            if (panzoom) {
              panzoom.panTo({
                x: -panzoom.viewport.width * 3.5,
                y: 0,
                scale: 8,
              });
            }
          },
        },
      });
}

function showECO2() {
    Fancybox.show([
        {
            src: "img/porfolio/full/ecoFull.png",
            type: "image",
        }
    ], {
        click: null,
        dragToClose: false,
        groupAttr : true,
        on: {
          "done": (fancybox, slide) => {
            const panzoom = slide.Panzoom;
            if (panzoom) {
              panzoom.panTo({
                x: -panzoom.viewport.width * 7,
                y: 0,
                scale: 16,
              });
            }
          },
        },
      });
}

function showEAI() {
    window.open("https://docs.google.com/document/d/1_VjHZZnm6Budvnn4UWvI4mBruAUtTq70v8sDznw45JM/edit?usp=sharing");
}
function showCI() {
    window.open("https://github.com/jamin-git/clutch-it");
}
function showAA() {
    window.open("https://github.com/jamin-git/action-assembly");
}
function showRTT() {
    window.open("https://github.com/jamin-git/react-task-tracker");
}
function showRE() {
    window.open("https://github.com/jamin-git/ReImagine-Georgia-Tech");
}