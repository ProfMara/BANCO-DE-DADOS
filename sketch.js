var database;
var pos;
var b;
var bp;

function setup() {
 
    createCanvas(500, 500);
    b = createSprite(250, 250, 10, 10);
    b.shapeColor = "red";


    pos = 1;
}

function draw() {
    background("white");

   if(pos!==undefined){
    if (keyDown(LEFT_ARROW)) {
        mexer(-3,0);
    }
    if (keyDown(RIGHT_ARROW)) {
        mexer(3,0);
    }
    if (keyDown(UP_ARROW)) {
        mexer(0,-3);
    }
    if (keyDown(DOWN_ARROW)) {
        mexer(0,3);
    }
    drawSprites();


   }

}

function mostrarErro(){
    console.log("Houve erro na hora de acessar o banco de dados");
}

function mexer(x,y)
{
    b.x +=x;
    b.y +=y;

}

   