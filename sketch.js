const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

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
    isStatic: true
  }

  //criar corpo da base do jogador
  base = Bodies.rectangle(windowWidth/3, windowHeight/8,60,60, options);
  World.add(world, base);
  player = Bodies.rectangle(windowWidth/3, windowHeight/8 -40,60,60,options)
  World.add(world, player);
  //criar corpo do jogador



}

function draw() {
  background(backgroundImg);


  //exibir a imagem do jogador usando a função image()
  image(baseimage,windowWidth/8 -20, windowHeight/6 +30,140,140);
  image(playerimage,windowWidth/8, windowHeight/9 -40,100,140);


  //exibir a imagem da base do jogador usando a função image()


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
  base.show()
  player.show()
}
