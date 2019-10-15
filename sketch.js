//--The Figrin D’an and the Modal Nodes

//--defining my variables--my main characters
var mySong;
var analyzer;

var firstBith;
var secondBith;
var thirdBith;
var fourthBith;
var jupiterMoons;


function preload(){
  //--loading my external material
  mySong = loadSound("./assets/cantinaSong.mp3");

  firstBith = loadImage("./assets/Cantina-Player-1.png");
  secondBith = loadImage("./assets/Cantina-Player-2.png");
  thirdBith = loadImage("./assets/Cantina-Player-3.png");
  fourthBith = loadImage("./assets/Cantina-Player-4.png");

  jupiterMoons = loadImage("./assets/jupiter-family.jpg");

}


function setup() {
  createCanvas(windowWidth, windowHeight);

  //--analysing my song
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);

}


function draw() {
  //--calling my background
  backgroundImage();

  //--calling my boys and make them dance
  push();
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);
  image(firstBith, 0, (-200-volume), firstBith.width, firstBith.height);
  firstBith.filter("blur");
  image(secondBith, 100, ((height-600)+volume), secondBith.width, secondBith.height);
  secondBith.filter("blur");
  image(thirdBith, (width-550), (-100+volume), thirdBith.width, thirdBith.height);
  thirdBith.filter("blur");
  image(fourthBith, (width-750), (height-400-volume), fourthBith.width, fourthBith.height);
  fourthBith.filter("blur");
  pop();

  //--my song is played in the lower part of the screen
  push();
  if (mouseY > height/5) {
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
  } else {
    mySong.stop();
  }
  pop();

  //--volume is increasigly higher going down of the screen
  push();
  mySong.amp((mouseY+1)*0.001);
  pop();

  //--bpms are increasigly higher on the right part of the screen
  push();
  mySong.rate((mouseX+1)*0.001);
  pop();

  //--my title
  push();
  var myText = "The Modal Nodes need your direction";
  drawingContext.font = "30px Geostar Fill";
  drawingContext.textAlign = "center";
  fill('Yellow');
  text(myText, width/2, height/5);
  pop();

  //--my textual directions
  push();
  var myText = "move your mouse up and down, left and right";
  drawingContext.font = "15px Geostar Fill";
  drawingContext.textAlign = "center";
  fill('Yellow');
  text(myText, width/2, (height/5)+30)
  pop();

}


function backgroundImage() {
  //--defining my background image adapted to my screen
  push();
  translate(width / 2,height / 2);
  imageMode(CENTER);
  let scale = Math.max(width/jupiterMoons.width, height/jupiterMoons.height);
  image(jupiterMoons, 0, 0, jupiterMoons.width*scale, jupiterMoons.height*scale);
  pop();

}
