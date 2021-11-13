const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var arrow;
var baseimage;
var playerimage;
var arrows = [];

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;


  angleMode(DEGREES);

  var options = {
    isStatic: true,
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world, player);

  playerArcher = new PlayerArcher(340, playerBase.position.y - 112, 120, 120);

  arrow = new PlayerArrow(
    playerArcher.body.position.x,
    playerArcher.body.position.y,
    100,
    10
  );
}

function draw() {
  background(backgroundImg);
  image(baseimage, playerBase.position.x, playerBase.position.y, 180, 150);
  image(playerimage, player.position.x, player.position.y, 50, 180);
  Engine.update(engine);

  showArrows();
  playerArcher.display();
  arrow.display();

  if (keyCode === 32) {
    arrow.shoot(playerArcher.body.angle);
  }

  function showArrows() {
    if (arrows.lenght > 0) {
      if (
        arrows[arrows.lenght - 1] === undefined ||
        arrows[arrows.lenght - 1].body.position.x < width - 300
      ) {
        var positions = [-40, -60, -70, -20];
        var position = random(positions);
        var arrow = new Arrow(width, height - 100, 170, 170, position);

        arrows.push(arrow);
      }
      arrows.push(arrows);
      for (var i = 0; i < arrow.length; i++) {
        if (arrows[i]) {
          Matter.Body.setVelocity(arrows[i].body, {
            x: -0.9,
            y: 0,
          });

          arrows[i].display();
        }
      }
    } else {
      
    }
  }

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  function keyPressed() {
    if (keyCode === 32) {
      var posX = playerArcher.body.position.x;
      var posY = playerArcher.body.position.y;
      var angle = playerArcher.body.angle;

      Matter.Body.setAngle(arrow.body, angle);
      playerArrows.push(arrow);
    }
  }
  function keyReleased() {
    if (keyCode === 32) {
      if (playerArrows.length) {
        var angle = playerArcher.body.angle;
        playerArrows[playerArrows.lenght - 1].shoot(angle);
      }
    }
  }

}
