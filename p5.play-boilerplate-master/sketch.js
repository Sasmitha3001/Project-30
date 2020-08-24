const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var world,engine;
var platform,platform2;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var slingshot;
var ball;




function setup() {
  createCanvas(800,400);

  engine=Engine.create()
  world=engine.world;

  platform=new Ground(400,200,200,10);
  platform2=new Ground(650,200,200,10);
  ground=new Ground(400,400,800,20);

   box1=new Box(400,150,50,50);
   box2=new Box(650,150,50,50);
   box3=new Box(350,150,50,50);
   box4=new Box(700,150,50,50);
   box5=new Box(450,150,50,50);
   box6=new Box(600,150,50,50);
   box7=new Box(370,100,50,50);
   box8=new Box(420,100,50,50);
   box9=new Box(395,50,50,50);
   box10=new Box(620,100,50,50);
   box11=new Box(670,100,50,50);
   box12=new Box(645,50,50,50);

   ball=new Ball(50,200,20);

  slingshot=new Slingshot(ball.body,{x:100,y:200});
}
  

function draw() {
  background(0); 
  Engine.update(engine); 

  ground.display();
  platform.display();
  platform2.display();

   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();

  slingshot.display();

  ball.display();

 

  
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(ball.body,{x:100,y:200});
    slingshot.attach(ball.body);
  }
}

function over(){
   if(box1.touches(ground)){
     box1=new Box(random(700,800),random(350,400),10,10)
     box1=new Box(random(700,800),random(350,400),10,10)
     box1=new Box(random(700,800),random(350,400),10,10)
     box1=new Box(random(700,800),random(350,400),10,10)
     box1=new Box(random(700,800),random(350,400),10,10)
   }

   if(box2.touches(ground)){
    box2=new Box(random(700,800),random(350,400),10,10)
    box2=new Box(random(700,800),random(350,400),10,10)
    box2=new Box(random(700,800),random(350,400),10,10)
    box2=new Box(random(700,800),random(350,400),10,10)
    box2=new Box(random(700,800),random(350,400),10,10)
  }

  if(box3.touches(ground)){
    box3=new Box(random(700,800),random(350,400),10,10)
    box3=new Box(random(700,800),random(350,400),10,10)
    box3=new Box(random(700,800),random(350,400),10,10)
    box3=new Box(random(700,800),random(350,400),10,10)
    box3=new Box(random(700,800),random(350,400),10,10)
  }

  if(box4.touches(ground)){
   box4=new Box(random(700,800),random(350,400),10,10)
   box4=new Box(random(700,800),random(350,400),10,10)
   box4=new Box(random(700,800),random(350,400),10,10)
   box4=new Box(random(700,800),random(350,400),10,10)
   box4=new Box(random(700,800),random(350,400),10,10)
 }

 if(box5.touches(ground)){
  box5=new Box(random(700,800),random(350,400),10,10)
  box5=new Box(random(700,800),random(350,400),10,10)
  box5=new Box(random(700,800),random(350,400),10,10)
  box5=new Box(random(700,800),random(350,400),10,10)
  box5=new Box(random(700,800),random(350,400),10,10)
}

if(box6.touches(ground)){
 box6=new Box(random(700,800),random(350,400),10,10)
 box6=new Box(random(700,800),random(350,400),10,10)
 box6=new Box(random(700,800),random(350,400),10,10)
 box6=new Box(random(700,800),random(350,400),10,10)
 box6=new Box(random(700,800),random(350,400),10,10)
}

if(box7.touches(ground)){
 box7=new Box(random(700,800),random(350,400),10,10)
 box7=new Box(random(700,800),random(350,400),10,10)
 box7=new Box(random(700,800),random(350,400),10,10)
 box7=new Box(random(700,800),random(350,400),10,10)
 box7=new Box(random(700,800),random(350,400),10,10)
}

if(box8.touches(ground)){
box8=new Box(random(700,800),random(350,400),10,10)
box8=new Box(random(700,800),random(350,400),10,10)
box8=new Box(random(700,800),random(350,400),10,10)
box8=new Box(random(700,800),random(350,400),10,10)
box8=new Box(random(700,800),random(350,400),10,10)
}

if(box9.touches(ground)){
  box9=new Box(random(700,800),random(350,400),10,10)
  box9=new Box(random(700,800),random(350,400),10,10)
  box9=new Box(random(700,800),random(350,400),10,10)
  box9=new Box(random(700,800),random(350,400),10,10)
  box9=new Box(random(700,800),random(350,400),10,10)
}

if(box10.touches(ground)){
 box10=new Box(random(700,800),random(350,400),10,10)
 box10=new Box(random(700,800),random(350,400),10,10)
 box10=new Box(random(700,800),random(350,400),10,10)
 box10=new Box(random(700,800),random(350,400),10,10)
 box10=new Box(random(700,800),random(350,400),10,10)
}

if(box11.touches(ground)){
 box11=new Box(random(700,800),random(350,400),10,10)
 box11=new Box(random(700,800),random(350,400),10,10)
 box11=new Box(random(700,800),random(350,400),10,10)
 box11=new Box(random(700,800),random(350,400),10,10)
 box11=new Box(random(700,800),random(350,400),10,10)
}

if(box12.touches(ground)){
box12=new Box(random(700,800),random(350,400),10,10)
box12=new Box(random(700,800),random(350,400),10,10)
box12=new Box(random(700,800),random(350,400),10,10)
box12=new Box(random(700,800),random(350,400),10,10)
box12=new Box(random(700,800),random(350,400),10,10)
}


}

