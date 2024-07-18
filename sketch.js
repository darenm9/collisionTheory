let myXPos = 100;
let myYPos = 100;
let enemyXpos = 300;
let enemyYpos = 300;
let myLeft,myRight,myTop,myBottom;
let enemyLeft,enemyRight,enemyTop,enemyBottom;

function setup() {
createCanvas(500, 500);
noStroke();

   rectMode(CENTER);
}


function draw() {
   background(0);
    fill(0,0,255);
   rect(enemyXpos, enemyYpos, 50,50);

   fill(255, 0, 0);
   rect(myXPos, myYPos, 50, 50);


   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 3;
   }


   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 3;
   }


   if (keyIsDown(UP_ARROW)) {
       myYPos -= 3;
   }


   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 3;
   }

   myLeft = myXpos - 25;
   myRight = myXpos + 25;
   myTop = myYpos - 25;
   myBottom = myYpos + 25;

   enemyLeft = enemyXpos - 25;
   enemyRight = enemyXpos + 25;
   enemyTop = enemyYpos - 25;
   enemyBottom = enemyYpos + 25;

   //detecting non collision:
   if(myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop){
    console.log("No Collision");
   }

else{
    console.log("COLLIDING");
    fill(random(255),random(255), random(255));
    text(30);
    text("I'm colliding with my enemy, ouch!");

}







}