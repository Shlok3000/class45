var ground;
var knight, princess, enimies;
var knightimage, knightimageattack, princessimage;
var ground, backgroundImage;
var invisibleGround;

function preload() {
    knightimage = loadImage("Shlok_s Sprites/Knight.png");
    backgroundImage = loadImage("Shlok_s Sprites/Sprite-10.jpg");
    princessimage = loadImage("Shlok_s Sprites/Sprite-3.jpg");
    knightimageattack = loadImage("Shlok_s Sprites/Knightattack.png");
}

function setup() {
    createCanvas(1200, 800);
    ground = createSprite(600, 400, 1200, 20);
    ground.addImage("ground", backgroundImage);
    ground.x = ground.width / 2;
    ground.velocityX = -(4);
    ground.scale = 3;

    knight = createSprite(610, 600, 100, 100);
    knight.addImage(knightimage);

    princess = createSprite(550, 600, 100, 100);
    princess.addImage(princessimage);
    princess.scale = 0.08;

    invisibleGround = createSprite(600,750,1200,30);
    invisibleGround.visible = false;
}

function draw() {
    background(0);
    if (ground.x < 0) {
        ground.x = 600;
    }

    if(keyDown("space") && knight.y >= 600){
        knight.velocityY = -12;
    }

    if(keyDown("k")){
        knight.addImage(knightimageattack);
    }

    if(keyWentUp("k")){
        knight.addImage(knightimage);
    }

    knight.velocityY = knight.velocityY + 0.8

    knight.collide(invisibleGround);

    drawSprites();
}