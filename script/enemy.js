var player =new Sprite("images/player.png");
var playerimage = new Image();
playerimage.src = "images/player.png";
var backgrnd1 = new Image();
backgrnd1.src="images/back.png";
var backgrnd2 = new Image();
backgrnd2.src="images/back2.png";
var ground = new Image();
ground.src="images/backdown.png";
var path = new Image();
path.src="images/path3.png";
var ship = new Image();
ship.src="images/shipsss1.png";
var alien = new Image();
alien.src="images/alien.png";
var bullet1 = new Image();
bullet1.src="images/bullet1.png";
var bullet2 = new Image();
bullet2.src="images/bullet2.png";
var blueSaber = new Image();
blueSaber.src="images/saber1.png";
var redSaber = new Image();
redSaber.src="images/saber11.png";
var flame = new Image();
flame.src="images/bullet.png";

var rotfx=0;
var rotfy=0;
var rotfx1=0;
var rotfy1=0;
var x=0;
var y=0;
var p;
var q;
var playerX=425;
var playerY=361.6;
var sound_muted = false;
var sound;
var music;

music = document.createElement("audio");
music.src = "audio/interstellar.mp3";
music.loop = true;
music.play();
//rotation

//Blue Saber rotating from left to right
var rotatingBlueSaber = function(x, y, width, height, rot, rgb){

   var rotation = rot;
   var rotationState = 0;

   this.drawBlueSaber = function(ctx){
     rotationState += rotation;
     p=playerX-25;
     q=playerY-25;

     if (p+50>x+50*Math.cos(rotationState+1.5) && p<=(x+50*Math.cos(rotationState+1.5))+5 && q+50>=y+45*Math.sin(rotationState+1.5) && q<=(y+45*Math.sin(rotationState+1.5))+52.5  ){

       music.pause();
       if(!sound_muted) {
         sound = document.createElement("audio");
         sound.src = "audio/gameover.mp3";
         sound.play();
       }
  clearInterval(animateInterval);
      document.getElementById("overlay").style.visibility="visible";

    }

    if (p+50>x+50*Math.cos(rotationState-1.5) && p<=(x+50*Math.cos(rotationState-1.5))+5 && q+50>=y+45*Math.sin(rotationState-1.5) && q<=(y+45*Math.sin(rotationState-1.5))+52.5  ){
      music.pause();
      if(!sound_muted) {
        sound = document.createElement("audio");
        sound.src = "audio/gameover.mp3";
        sound.play();
      }
      clearInterval(animateInterval);
      document.getElementById("overlay").style.visibility="visible";

    }

    if(x>1330){
      x=0;
    }
    x=x+2;
    y=0.000520*x*x-0.65400*x+440;
    rotfx=x;
    rotfy=y;
    ctx.save();
    ctx.translate(x+(width/2), y+(height/2));
    ctx.rotate(rotationState);
    ctx.fillStyle = rgb;
    ctx.drawImage(blueSaber,0-(width/2),0-(height/2),10,105);
    ctx.restore();

  }
}

function generateBlueSaber(){
  var count = 1;
  var allShapes = [];
  for (i=0; i < count; ++i) {
    var rotation = (Math.random()*.09)+0.07;
    var x = 0;
    y=0.000516*x*x-0.65400*x+440;
    var red = 46;
    var green = 123;
    var blue = 10;
    var opacity = 1;
    var rect = new rotatingBlueSaber(x, y, 10, 105, rotation,"rgba("+red+", "+green+", "+blue+", "+opacity+")");
    allShapes.push(rect);
  }
  return allShapes;
}

function drawBlueSaber() {
  generateBlueSaber();

  var canvas = document.getElementById('canv');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    for (i=0; i < allShapes.length; ++i) {
      allShapes[i].drawBlueSaber(ctx);
    }
  }
}

var allShapes = generateBlueSaber();

//rotationstatic4
//Red Saber moving from left to right
var t=0;
var rotatingRedSaber = function(x, y, width, height, rot, rgb, direction){
  var rotation = rot;
  var rotationState = 0;

  this.drawRedSaber = function(ctx){
    direction ? rotationState += rotation : rotationState -= rotation;
    p=playerX-25;
    q=playerY-25;

    if (p+50>x+50*Math.cos(rotationState+1.5) && p<=(x+50*Math.cos(rotationState+1.5))+7.5 && q+50>=y+45*Math.sin(rotationState+1.5) && q<=(y+45*Math.sin(rotationState+1.5))+65  ){
      music.pause();
      if(!sound_muted) {
        sound = document.createElement("audio");
        sound.src = "audio/gameover.mp3";
        sound.play();
      }
      clearInterval(animateInterval);
      document.getElementById("overlay").style.visibility="visible";
    }

    if (p+50>x+50*Math.cos(rotationState-1.5) && p<=(x+50*Math.cos(rotationState-1.5))+7.5 && q+50>=y+45*Math.sin(rotationState-1.5) && q<=(y+45*Math.sin(rotationState-1.5))+65  ){
      music.pause();
      if(!sound_muted) {
        sound = document.createElement("audio");
        sound.src = "audio/gameover.mp3";
        sound.play();
      }
      clearInterval(animateInterval);
      document.getElementById("overlay").style.visibility="visible";
    }
    x=102;
    y=0.000520*x*x-0.65400*x+440;
    ctx.save();
    ctx.translate(x+(width/2), y+(height/2));
    ctx.rotate(rotationState);
    ctx.fillStyle = rgb;
    ctx.drawImage(redSaber,0-(width/2),0-(height/2),15,130);
    ctx.restore();
  }
}

function generateRedSaber(){
  var count = 1;
  var allShapessb = [];
  for (i=0; i < count; ++i) {
    var rotation = (Math.random()*.10)+0.05;
    var x =102;
    var y=480;
    var red = 46;
    var green = 123;
    var blue = 10;
    var opacity = 1;
    var direction = Math.round(Math.random()) == 0 ? false : true
    var rect = new rotatingRedSaber(x, y, 15, 130, rotation, "rgba("+red+", "+green+", "+blue+", "+opacity+")", direction);
    allShapessb.push(rect);
  }
  return allShapessb;
}

function drawRedSaber() {

  var canvas = document.getElementById('canv');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    for (i=0; i < allShapessb.length; ++i) {
      allShapessb[i].drawRedSaber(ctx);
    }
  }
}
var allShapessb = generateRedSaber();
//rotationstatic4
//rotationstatic4f
//Stationary red sabers
var t=0;
var rotatingRedSaberf = function(x, y, width, height, rot, rgb, direction){
  var rotation = rot;
  var rotationState = 0;
  this.drawRedSaberf = function(ctx){
    direction ? rotationState += rotation : rotationState -= rotation;
    x=102;
    y=0.000520*x*x-0.65400*x+440;
    ctx.save();
    ctx.translate(x+(width/2), y+(height/2));
    ctx.rotate(rotationState);
    ctx.fillStyle = rgb;
    ctx.drawImage(redSaber,0-(width/2),0-(height/2),15,130);
    ctx.restore();
  }
}

function generateRedSaberf(){
  var count = 1;
  var allShapessbf = [];
  for (i=0; i < count; ++i) {
    var rotation = (Math.random()*.10)+0.05;
    var x =102;
    var y=480;
    var red = 46;
    var green = 123;
    var blue = 10;
    var opacity = 1;
    var direction = Math.round(Math.random()) == 0 ? false : true
    var rect = new rotatingRedSaberf(x, y, 15, 130, rotation, "rgba("+red+", "+green+", "+blue+", "+opacity+")", direction);
    allShapessbf.push(rect);
  }
  return allShapessbf;
}

function drawRedSaberf() {

  var canvas = document.getElementById('canv');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
//ctx.clearRect(0, 0, 640, 480);
    for (i=0; i < allShapessbf.length; ++i) {
    allShapessbf[i].drawRedSaberf(ctx);
    }
  }
}
var allShapessbf = generateRedSaberf();

//Stationary red sabers
var t=0;
var rotatingRedSaberb = function(x, y, width, height, rot, rgb, direction){
  var rotation = rot;
  var rotationState = 0;

  this.drawRedSaberb = function(ctx){
    direction ? rotationState += rotation : rotationState -= rotation;
    p=playerX-25;
    q=playerY-25;
 //alert(RotatingRectangle.x+" ");
    if (p+50>x+50*Math.cos(rotationState+1.5) && p<=(x+50*Math.cos(rotationState+1.5))+7.5 && q+50>=y+45*Math.sin(rotationState+1.5) && q<=(y+45*Math.sin(rotationState+1.5))+65  ){
      music.pause();
      if(!sound_muted) {
        sound = document.createElement("audio");
        sound.src = "audio/gameover.mp3";
        sound.play();

      }
      clearInterval(animateInterval);
      document.getElementById("overlay").style.visibility="visible";
    }

    if (p+50>x+50*Math.cos(rotationState-1.5) && p<=(x+50*Math.cos(rotationState-1.5))+7.5 && q+50>=y+45*Math.sin(rotationState-1.5) && q<=(y+45*Math.sin(rotationState-1.5))+65  ){
      music.pause();
      if(!sound_muted) {
        sound = document.createElement("audio");
        sound.src = "audio/gameover.mp3";
        sound.play();
      }
      clearInterval(animateInterval);
      document.getElementById("overlay").style.visibility="visible";
    }

    x=1228;
    y=0.000520*x*x-0.65400*x+440;

    ctx.save();
    ctx.translate(x+(width/2), y+(height/2));
    ctx.rotate(rotationState);
    ctx.fillStyle = rgb;
    ctx.drawImage(redSaber,0-(width/2),0-(height/2),15,130);
    ctx.restore();
  }
}

function generateRedSaberb(){
  var count = 1;
  var allShapessbb = [];
  for (i=0; i < count; ++i) {
    var rotation = (Math.random()*.10)+0.05;
    var x =1228;
    var y=490;
    var red = 46;
    var green = 123;
    var blue = 10;
    var opacity = 1;
    var direction = Math.round(Math.random()) == 0 ? false : true
    var rect = new rotatingRedSaberb(x, y, 15, 130, rotation, "rgba("+red+", "+green+", "+blue+", "+opacity+")", direction);
    allShapessbb.push(rect);
  }
  return allShapessbb;
}

function drawRedSaberb() {
  var canvas = document.getElementById('canv');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    for (i=0; i < allShapessbb.length; ++i) {
      allShapessbb[i].drawRedSaberb(ctx);
    }
  }
}

var allShapessbb = generateRedSaberb();
//rotationstatic5
//rotationstatic5f

//Stationary red sabers
var t=0;
var rotatingRedSaberbf = function(x, y, width, height, rot, rgb, direction){
  var rotation = rot;
  var rotationState = 0;
  this.drawRedSaberbf = function(ctx){
    direction ? rotationState += rotation : rotationState -= rotation;
    x=1228;
    y=0.000520*x*x-0.65400*x+440;

    ctx.save();
    ctx.translate(x+(width/2), y+(height/2));
    ctx.rotate(rotationState);
    ctx.fillStyle = rgb;
    ctx.drawImage(redSaber,0-(width/2),0-(height/2),15,130);
    ctx.restore();
  }
}

function generateRedSaberbf(){
  var count = 1;
  var allShapessbbf = [];
  for (i=0; i < count; ++i) {
    var rotation = (Math.random()*.10)+0.05;
    var x =1228;
    var y=490;
    var red = 46;
    var green = 123;
    var blue = 10;
    var opacity = 1;
    var direction = Math.round(Math.random()) == 0 ? false : true
    var rect = new rotatingRedSaberbf(x, y, 15, 130, rotation, "rgba("+red+", "+green+", "+blue+", "+opacity+")", direction);

    allShapessbbf.push(rect);
  }
  return allShapessbbf;
}

function drawRedSaberbf() {
  var canvas = document.getElementById('canv');

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    for (i=0; i < allShapessbbf.length; ++i) {
      allShapessbbf[i].drawRedSaberbf(ctx);
    }
  }
}

var allShapessbbf = generateRedSaberbf();

//Stationary red sabers
var t=0;
var rotatingRedSabere = function(x, y, width, height, rot, rgb, direction){
  var rotation = rot;
  var rotationState = 0;
  this.drawRedSabere = function(ctx){
    direction ? rotationState += rotation : rotationState -= rotation;
    p=playerX-25;
    q=playerY-25;
    if (p+50>x+50*Math.cos(rotationState+1.5) && p<=(x+50*Math.cos(rotationState+1.5))+7.5 && q+50>=y+45*Math.sin(rotationState+1.5) && q<=(y+45*Math.sin(rotationState+1.5))+65  ){
      music.pause();
      if(!sound_muted) {
        sound = document.createElement("audio");
        sound.src = "audio/gameover.mp3";
        sound.play();
      }
      clearInterval(animateInterval);
      document.getElementById("overlay").style.visibility="visible";
    }
    if (p+50>x+50*Math.cos(rotationState-1.5) && p<=(x+50*Math.cos(rotationState-1.5))+7.5 && q+50>=y+45*Math.sin(rotationState-1.5) && q<=(y+45*Math.sin(rotationState-1.5))+65  ){
      music.pause();
      if(!sound_muted) {
        sound = document.createElement("audio");
        sound.src = "audio/gameover.mp3";
        sound.play();
      }
      clearInterval(animateInterval);
      document.getElementById("overlay").style.visibility="visible";
    }

    x=665;
    y=0.000520*x*x-0.65400*x+440;

    ctx.save();
    ctx.translate(x+(width/2), y+(height/2));
    ctx.rotate(rotationState);
    ctx.fillStyle = rgb;
    ctx.drawImage(redSaber,0-(width/2),0-(height/2),15,130);
    ctx.restore();
  }
}

//Stationary red sabers
function generateRedSabere(){
  var count = 1;
  var allShapesss = [];
  for (i=0; i < count; ++i) {
    var rotation = (Math.random()*.10)+0.05;
    var x =665;
    var y=315;
    var red = 46;
    var green = 123;
    var blue = 10;
    var opacity = 1;
    var direction = Math.round(Math.random()) == 0 ? false : true
    var rect = new rotatingRedSabere(x, y, 15, 130, rotation, "rgba("+red+", "+green+", "+blue+", "+opacity+")", direction);
    allShapesss.push(rect);
  }
  return allShapesss;
}

function drawRedSabere() {
  var canvas = document.getElementById('canv');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    for (i=0; i < allShapesss.length; ++i) {
      allShapesss[i].drawRedSabere(ctx);
    }
  }
}

var allShapesss = generateRedSabere();
//rotationstatic2

//rotationstatic2f

var t=0;
var rotatingRedSaberef = function(x, y, width, height, rot, rgb, direction){
  var rotation = rot;
  var rotationState = 0;

  this.drawRedSaberef = function(ctx){
    direction ? rotationState += rotation : rotationState -= rotation;
    x=665;
    y=0.000520*x*x-0.65400*x+440;

    ctx.save();
    ctx.translate(x+(width/2), y+(height/2));
    ctx.rotate(rotationState);
    ctx.fillStyle = rgb;
    ctx.drawImage(redSaber,0-(width/2),0-(height/2),15,130);
    ctx.restore();
  }
}

function generateRedSaberef(){
  var count = 1;
  var allShapesssf = [];
  for (i=0; i < count; ++i) {
    var rotation = (Math.random()*.10)+0.05;
    var x =665;
    var y=315;
    var red = 46;
    var green = 123;
    var blue = 10;
    var opacity = 1;
    var direction = Math.round(Math.random()) == 0 ? false : true
    var rect = new rotatingRedSaberef(x, y, 15, 130, rotation, "rgba("+red+", "+green+", "+blue+", "+opacity+")", direction);
    allShapesssf.push(rect);
  }
  return allShapesssf;
}
function drawRedSaberef() {
  var canvas = document.getElementById('canv');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    for (i=0; i < allShapesssf.length; ++i) {
      allShapesssf[i].drawRedSaberef(ctx);
    }
  }
}

var allShapesssf = generateRedSaberef();
//rotationstatic2f

function initCanvas(){
    var ctx = document.getElementById('canv').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    var mouseX;
    var mouseY;
    var x=0;
    var y=0;
    var keys=[];
    var speed=6;
    var r;
    var p;
    var u =0 ;
    var t = 0.9;
    var b = 247;
    var mouseY;
    var mousex;
    var bulletsAbove=[];
    var bulletsFromLeft=[];
    var bulletsAbove2=[];
    var flame1=[];
    var flame2=[];
    var spaceShip1=[];
    var spaceShip2=[];
    var rotfx1=0;
    var rotfy1=0;

    function flameCoordinates1(){
      var x = cW;
      var y =Math.floor(Math.random() * 310) +290;
      rotfx1=x;
      rotfy1=y;
      var s= Math.floor(Math.random()*1  ) +1;
      flame1.push({"x":x,"y":y,"s":s});
    }
//Flame thrown from left to right
    function drawFlame1(){
      flameCoordinates1();
      for (var i=0;i<3;i++){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "magenta";
        ctx.drawImage(flame,flame1[i].x-=(flame1[i].s*5), flame1[i].y, 8, 8);
        ctx.fill();
        ctx.restore();
        p=playerX-25;
        q=playerY-25;
        if (p+50>flame1[i].x && p<=flame1[i].x+8 && q+50>=flame1[i].y && q<=flame1[i].y+8  ){
          music.pause();
          if(!sound_muted) {
            sound = document.createElement("audio");
            sound.src = "audio/gameover.mp3";
            sound.play();
          }
          clearInterval(animateInterval);
          document.getElementById("overlay").style.visibility="visible";
        }

            if(flame1[i].x<0){
                flame1.splice(i,100);
            }
        }
    }

    function flameCoordinates2(){
      var x = rotfx1;
      var y =rotfy1;
      var s= Math.floor(Math.random()*1  ) +1;
      flame2.push({"x":x,"y":y,"s":s});
    }

    function drawFlame2(){
      flameCoordinates2();
       for (var i=0;i<3;i++)
        {
          ctx.save();
          ctx.beginPath();
          ctx.fillStyle = "magenta";
          ctx.drawImage(flame,flame2[i].x, flame2[i].y, 8, 8);
          ctx.fill();
          ctx.restore();
          if(flame2[i].x<0){
                flame2.splice(i,100);
          }
        }
    }


    function spaceShipCoordinates1(){
      var x =Math.floor(Math.random() * cW) +1;
      var y =cH
      var s= Math.floor(Math.random()*1  ) +1;
      spaceShip1.push({"x":x,"y":y,"s":s});
    }

    function drawSpaceShip1(){
      spaceShipCoordinates1();
       for (var i=0;i<6;i++)
       {
          ctx.save();
          ctx.beginPath();
          ctx.fillStyle = "white";
          ctx.drawImage(ship,spaceShip1[i].x,spaceShip1[i].y-=(spaceShip1[i].s*2),80,300);
          ctx.fill();
          ctx.restore();
          p=playerX-25;
          q=playerY-25;
          if (p+50>spaceShip1[i].x && p<=spaceShip1[i].x+80 && q+50>=spaceShip1[i].y && q<=spaceShip1[i].y+300  ){
            music.pause();
            if(!sound_muted) {
              sound = document.createElement("audio");
              sound.src = "audio/gameover.mp3";
              sound.play();
            }
            clearInterval(animateInterval);
            document.getElementById("overlay").style.visibility="visible";
          }
          if(spaceShip1[i].y+250<0){
                spaceShip1.splice(i,100);
          }
      }
    }

    function spaceShipCoordinates2(){
        var x =Math.floor(Math.random() * cW) +1;
        var y =cH
        var s= Math.floor(Math.random()*1  ) +1;
        spaceShip2.push({"x":x,"y":y,"s":s});
    }

    function drawSpaceShip2(){
      spaceShipCoordinates2();
       for (var i=0;i<6;i++)
       {
         ctx.save();
         ctx.beginPath();
         ctx.fillStyle = "magenta";
         ctx.drawImage(ship,spaceShip2[i].x,spaceShip2[i].y,80,300);
         ctx.fill();
         ctx.restore();
         if(spaceShip2[i].y+250<0){
                spaceShip2.splice(i,100);
         }
      }
   }

   function bulletsFromAboveCoordinates1(){
     var x = playerX;
     var y =0;
     var s= Math.floor(Math.random()*1  ) +1;
     bulletsAbove.push({"x":x,"y":y,"s":s});
   }

    function drawBulletsFromAbove1(){
      bulletsFromAboveCoordinates1();
      for (var i=0;i<1;i++)
      {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "magenta";
        ctx.drawImage(bullet1,bulletsAbove[i].x,bulletsAbove[i].y+=bulletsAbove[i].s*10,7,20);
        ctx.fill();
        ctx.restore();
        p=playerX-25;
        q=playerY-25;
        if (p+50>bulletsAbove[i].x && p<=bulletsAbove[i].x+7 && q+50>=bulletsAbove[i].y && q<=bulletsAbove[i].y+20  ){
          music.pause();
          if(!sound_muted) {
            sound = document.createElement("audio");
            sound.src = "audio/gameover.mp3";
            sound.play();
          }
          clearInterval(animateInterval);
          document.getElementById("overlay").style.visibility="visible";
        }
        if(bulletsAbove[i].y>cH){
          bulletsAbove.splice(i,100);
        }
      }
    }

    function bulletsFromLeftCoordinates1(){
      var x = 0;
      var y=playerY;
      var s= Math.floor(Math.random()*1  ) +1;
      bulletsFromLeft.push({"x":x,"y":y,"s":s});
    }

    function drawBulletsFromLeft1(){
      bulletsFromLeftCoordinates1();
      bulletsFromLeft.y=playerY;
       for (var i=0;i<1;i++)
       {

         ctx.save();
         ctx.beginPath();
         ctx.fillStyle = "magenta";
         ctx.drawImage(bullet2,bulletsFromLeft[i].x+=bulletsFromLeft[i].s*7,bulletsFromLeft[i].y,20,7);
         ctx.fill();
         ctx.restore();
         p=playerX-25;
         q=playerY-25;
         if (p+50>bulletsFromLeft[i].x && p<=bulletsFromLeft[i].x+20 && q+50>=bulletsFromLeft[i].y && q<=bulletsFromLeft[i].y+7  ){
           music.pause();
           if(!sound_muted) {
             sound = document.createElement("audio");
             sound.src = "audio/gameover.mp3";
             sound.play();
           }
           clearInterval(animateInterval);
           document.getElementById("overlay").style.visibility="visible";
         }
         if(bulletsFromLeft[i].x>cW){
           bulletsFromLeft.splice(i,100);
         }
       }
     }

    function drawBulletsFromLeft2(){
      bulletsFromAboveCoordinates1();
      bulletsFromLeft.y=playerY;
      for (var i=0;i<1;i++)
      {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "magenta";
        ctx.drawImage(bullet2,bulletsFromLeft[i].x,bulletsFromLeft[i].y,20,7);
        ctx.fill();
        ctx.restore();
        if(bulletsFromLeft[i].x>cW){
          bulletsFromLeft.splice(i,100);
        }
      }
    }

    function bulletsFromAboveCoordinates2(){
      var x = playerX;
      var y =0;
      var s= Math.floor(Math.random()*1  ) +1;

      bulletsAbove2.push({"x":x,"y":y,"s":s});
    }

    function drawBulletsFromAbove2(){
      setTimeout(bulletsFromAboveCoordinates2,1000);
      for (var i=0;i<1;i++)
      {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "magenta";
        ctx.drawImage(bullet1,bulletsAbove2[i].x,bulletsAbove2[i].y+=bulletsAbove2[i].s*7,7,20);
        ctx.fill();
        ctx.restore();
        p=playerX-25;
        q=playerY-25;
        if (p+50>bulletsAbove2[i].x && p<=bulletsAbove2[i].x+7 && q+50>=bulletsAbove2[i].y && q<=bulletsAbove2[i].y+20  ){
          music.pause();
          if(!sound_muted) {
            sound = document.createElement("audio");
            sound.src = "audio/gameover.mp3";
            sound.play();
          }
          clearInterval(animateInterval);
          document.getElementById("overlay").style.visibility="visible";
        }
        if(bulletsAbove2[i].y>cH){
          bulletsAbove2.splice(i,100);
        }
      }
    }

    window.addEventListener("keydown",function(e){
      keys[e.keyCode]=true;
    },false);



    window.addEventListener("keyup",function(e){
      delete keys[e.keyCode];
    },false);
    var x=400;

    function anim(){
      var flag=0;
      y=0.000520*x*x-0.65400*x+515;
      playerY=y+25;
      ctx.arc(662, 1550, 1200, 0, Math.PI * 2);
      ctx.stroke();
      if (keys[37])
      {
        x-=speed;
        playerX=x+25;
        player.drawAnimated(x,y,[6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10],ctx);
        playerY=y+25;
      }
      else if(keys[39])
      {
        x+=speed;
        playerX=x+25;
        if(x<-25) x=-25;
        if(x>=cW-25) x=cW-25;
        player.drawAnimated(x,y,[12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16],ctx);
        playerY=y+25;
      }
      else{
        player.drawAnimated(x,y,[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4],ctx);
        playerY=y+25;
      }
    }

    function background(){
      this.x = 0,this.y = 0,this.w = backgrnd1.width,this.h=backgrnd1.height;
      this.render = function(){
        ctx.drawImage(backgrnd1,this.x++,0);
        if(this.x>=1330){
          this.x=-1330;
        }
      }
    }

    function background1(){
      this.x = -1330,this.y = 0,this.w = backgrnd2.width,this.h=backgrnd2.height;
      this.render = function(){
        ctx.drawImage(backgrnd2,this.x++,0);
        if(this.x>=1330){
          this.x=-1330;
        }
      }
    }

    var backk= new background();
    var backk2= new background1();

    function animate(){
      var d = new Date();
      var n = d.getSeconds();
      var f = d.getMinutes();

      ctx.save();
      ctx.clearRect(0, 0, cW, cH);
      backk.render();
      backk2.render();
      ctx.drawImage(path,0,0);
      ctx.drawImage(ground,0,0);
      anim();

      if((n>17 && n<27) && ((f%2)==1 )){
        drawRedSabere();
      }
      if(n>15 && n<17 && ((f%2)==1 )){
        setTimeout(drawRedSaberef,1000);
      }
      if((n>52) || (n<1) ){
        drawFlame1();
      }
      if(n>50 && n<52){
        setTimeout(drawFlame2,1000);
      }
      if(n>4 && n<14  ){
        drawSpaceShip1();
      }
      if(n>2 && n<4  ){
        setTimeout(drawSpaceShip2,1000);
      }
      if((n>17 && n<27) && ((f%2)==1 )){
        drawRedSaber();
      }
      if(n>15 && n<17 && ((f%2)==1 )){
        setTimeout(drawRedSaberf,1000);
      }
      if((n>17 && n<27) && ((f%2)==1 )){
        drawRedSaberb();
      }
      if(n>15 && n<17 && ((f%2)==1 )){
        setTimeout(drawRedSaberbf,1000);
      }
//wanted

    if((((n>53) || (n<15))&& ((f%2)==0 )) || (f%2==1) ){
      drawBulletsFromLeft1();
    }
    if((n>51 && n<53&& ((f%2)==0 )) ){
      setTimeout(drawBulletsFromLeft2,1000);
    }
//wanted
    drawBulletsFromAbove1();
    //boxx();
//new
    if((n>20 && n<51)&& ((f%2)==0 ) ){
      rotatingBlueSaber();
    }
    if((n>15 && n<20)&& ((f%2)==0 ) ){
      setTimeout( drawSpaceShip2,1000);
    }
//new
    if((n>30 && n<51)&& ((f%2)==1 ) ){
      drawBlueSaber();
    }
    if((n>28 && n<30)&& ((f%2)==1 )){
      setTimeout(drawRedSaberbf,1000);
    }
    ctx.restore();
  }
  var animateInterval = setInterval(animate, 30);
    /*
    var animateInterval;
    ctx.canvas.addEventListener('click', function(event) {
        //clearInterval(animateInterval);
        var animateInterval = setInterval(animate, 30);
    });
*/
}


window.addEventListener('load', function(event) {

    initCanvas();

});

var animateInterval = setInterval(animate, 30);
