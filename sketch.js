const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var platform, division;
var particles, plinko;
var score=0;
var particle=  [];
var plinko=[];
var division=[];
var divisionHeight=300;

function preload(){

}

function setup(){
    var canvas = createCanvas(820,600);
    engine = Engine.create();
    world = engine.world;

    for (var i = 0;i<=800;i=i+80){
        division.push(new Division(i,580,10,300))
    }

    for (var z = 50;z<=800;z=z+50){
        plinko.push(new Plinko(z,75,10))
        plinko.push(new Plinko(z,175,10))
    }
    for (var z = 50;z<=800;z=z+40){
        plinko.push(new Plinko(z,125,10))
        plinko.push(new Plinko(z,225,10))
    }
    grnd = new Ground(400,600,1000,20)
}
function draw(){
    background("black");
    fill("white");
    //text("SCORE :"+score,750,40)
    Engine.update(engine);
    strokeWeight(4);
    text(mouseX+","+mouseY,mouseX,mouseY);
    if(frameCount%60===0)
    { particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++; 
    }
    for (var j = 0; j < particle.length; j++)
    { particle[j].display(); }
    for (var j = 0; j < plinko.length; j++)
    { plinko[j].display(); }
    for (var k = 0; k < division.length; k++)
    { division[k].display(); }
    grnd.display();

}