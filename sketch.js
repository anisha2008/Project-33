var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;

gameState ="play"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     plinkos.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);

 textSize(30)
 text(500,10,550)
 text(500,100,550)
 text(500,180,550)
 text(500,250,550)
 text(100,330,550)
 text(100,410,550)
 text(100,490,550)
 text(200,570,550)
 text(200,650,550)
 text(200,730,550)
 

  Engine.update(engine);

  if(particles!=null){
    particles.display()

    if(particles.body.position.y>760){
       
      if(particles.body.position.x<300){
        score=score+500
        particles=null
      }
      if(particles.body.position.x>300 && particles.body.position.x<600 ){
      score=score+100
      particles=null
      }
      if(particles.body.position.x<600 && particles.body.position.x<900){
      score=score+200
      particles=null
      }
    }
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

  

   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < particles.length; k++) {
     
     particles[k].display();
   }
   
}


