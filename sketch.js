var ball, ballImg;
var paddleImg, paddle;

function preload() {

  ballImg = loadImage("ball.png");
  paddleImg = loadImage("paddle.png");
}

function setup() {
  createCanvas(800, 400);
  paddle = createSprite(700, 200, 20, 100);
  paddle.shapeColor  = "white";
  paddle.addImage("paddles", paddleImg);
  ball = createSprite(400, 200, 20, 20);
  ball.addImage("balls", ballImg);
  ball.shapeColor = "yellow";
  ball.velocityX = -9;
  ball.velocityX = 4;
  ball.velocityY = 2;

}

function draw() {
  background(225);

  edges = createEdgeSprites();
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(paddle);
  ball.bounceOff(paddle);
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  
  if(keyDown(UP_ARROW)) {
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW)) {
    paddle.y = paddle.y + 20;
  }

  randomVelocity();

  drawSprites();
  
}

function randomVelocity() {

  if(ball.bounceOff(paddle)) {
    ball.velocityY = 5;
    ball.velocityX = -5;
  }

}