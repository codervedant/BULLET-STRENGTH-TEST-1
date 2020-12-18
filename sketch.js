//CREATING WALL, THICKNESS OF THE WALL, BULLET, SPEED OF THE BULLET AND WEIGHT OF THE BULLET AS A VARIABLE
   var wall, thickness;
   var bullet, speed, weight;


 function setup(){

//CREATING CANVAS
     createCanvas(1600, 400);

//GIVING RANDOM VALUES FOR SPEED, WEIGHT, THICKNESS
     speed = random(223, 321);
     weight = random(30, 52);
     thickness = random(22, 83);

//CREATING A BULLET AS A SPRITE
     bullet = createSprite(50, 200, 40, 10);  
     bullet.velocityX = speed;
     bullet.shapeColor = color(255);

//CREATING WALL AS A SPRITE
     wall = createSprite(1200, 200, thickness, height/2);  
     wall.shapeColor = color(230, 230, 230);
}


 function draw(){

//GIVING BACKGROUND COLOR
     background("lightgreen");  

  if(hasCollided(bullet, wall)){
     bullet.velocityX = 0;

   var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);
  	
	if(damage > 10){
     wall.shapeColor = color(255,0,0);
}

	if(damage < 10){
     wall.shapeColor=color(0,255,0);
}
}

//COMAND FOR DRAWING SPRITES
     drawSprites();
}


//FUNCTION FOR WALL COLLIDING
 function hasCollided(lbullet, lwall){
	   bulletRightEdge=lbullet.x +lbullet.width;
     wallLeftEdge=lwall.x;
     
	if (bulletRightEdge >= wallLeftEdge){
		 return true
}
	   return false;
}