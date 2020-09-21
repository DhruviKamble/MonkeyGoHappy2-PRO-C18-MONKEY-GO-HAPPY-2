var monkeyImage, monkey;
var bananaImage, banana, banana_group;
var obstacleImage, obstacle, obstacle_group;
var jungleImage, jungle;
var score;
var ground;

function preload() {
    monkeyImage = loadImage("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("stone.png");
    jungleImage = loadImage("jungle.jpg");
}

function setup () {
    monkey = createSprite(250, 200, 10,10);
	monkey.addImage(monkeyImage);
    monkey.scale=0.07;
    
    banana = createSprite(260, 200, 10,10);
	banana.addImage(bananaImage);

    obstacle = createSprite(width/2, 200, 10,10);
	obstacle.addImage(obstacleImage);
    obstacle.scale=0.6;

    jungle = createSprite(250, 200, 10,10);
	jungle.addImage(jungleImage);
    jungle.scale=0.6;
    jungle.velocityX = -7;
    jungle.x = jungle.width/2;
}

function draw () {
    createCanvas(500, 400);

    if (jungle.x<250) {
        jungle.x = 300;
    }

    ground = createSprite(250, 380, 600, 7);

    background(0);
    drawSprites();
}