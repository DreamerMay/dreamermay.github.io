console.log("Hi There, Welcome to my portfolio");

// Setup starfield
let stars = [];
let speed;

//=========================
// Canvas Setup
//=========================

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();

  //=========================
  // Canvas Setup
  //=========================
  canvas.parent('canvas');
  width = windowWidth;
  height = windowHeight;
  width < height ? smlAxis = width : smlAxis = height;

  //=================
  // Starfield
  //=================
  function Star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);

    this.display = function() {
      noStroke();
      fill(255);
      let sx = map(this.x / this.z, 0, 1, 0, width);
      let sy = map(this.y / this.z, 0, 1, 0, height);
      let r = map(this.z, 0 , width, 12, 0);
      ellipse(sx, sy, r, r);
    } // disply

    this.update = function() {
      this.z -= speed;

      if (this.z < 1) {
        this.z = width;
        this.x = random(-width, width);
        this.y = random(-height, height);
      }
    } // update
  } // Star

  for (let i = 0; i < 800; i++) {
    stars[i] = new Star();
  }

} // setup


function draw()
{
  width = windowWidth;
  height = windowHeight;
  background(0);
  noStroke();

    // ===============
    // Starfield Art
    // ===============
      translate(width/2, height/2);
      speed = map(mouseX, 0, width, 2, 20);
      for (var i = 0; i < stars.length; i++) {
       stars[i].display();
       stars[i].update();
     } // star
};

// default try iziModal
// $(document).on('click', '.open-default', function(event) {
//   event.preventDefault();
//   $('#modal').iziModal('open');
// });
// $('#modal').iziModal();


// modality popup
$('#audio-art-popup').modality({
    effect: 'slide-up'
});

$('#dating-web-popup').modality({
    effect: 'slide-up'
});

$('#fashion-web-popup').modality({
    effect: 'slide-up'
});

$('#TTT-popup').modality({
    effect: 'slide-up'
});

$('#KWTE-popup').modality({
    effect: 'slide-up'
});

$('#property-popup').modality({
    effect: 'slide-up'
});

$('#westfield-popup').modality({
    effect: 'slide-up'
});

$('#wordzer-popup').modality({
    effect: 'slide-up'
});
