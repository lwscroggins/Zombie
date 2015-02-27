$(document).ready(function() {
  $('button').on('click', function() {

var guess = $('.pick').val();
console.log(guess);

var Runner = function(n, s, f){
  this.name = n;
  this.speed = s;
  this.focus = f;
  this.position = 10;
  this.report = function(){
    return(this.name + " is at " + this.position + " yards.");
  }
  this.run = function() {
    if(this.focus >= Math.floor(Math.random()*10)) {
      this.position += this.speed;
    };
  };
};//end runners function

var Zombie = function(n, s, f){
  this.name = n;
  this.speed = s;
  this.focus = f;
  this.position = 0;
  this.report = function(){
    return("The zombie is at " + this.position + " yards. ");
  };
  this.run = function(){
    if(this.focus >= Math.floor(Math.random()*10)) {
      this.position += this.speed;
    };
  };

};


//Creating characters as objects
var Runner1 = new Runner ("Daryl", 3, 6),
    Runner2 = new Runner ("Rick", 3, 4), 
    Runner3 = new Runner ("Carl", 4, 3),
    Zombie = new Zombie ("Zombie", 5, 2);

var distance = 100;
while(Runner1.position > Zombie.position && Runner1.position < distance && Runner2.position > Zombie.position && Runner2.position < distance && Runner3.position > Zombie.position && Runner3.position < distance){
  Runner1.run();
  Runner2.run();
  Runner3.run();
  Zombie.run();
}

if(Runner1.position >= distance || Runner2.position >= distance || Runner3.position >= distance) {
  alert("Everyone lives. Sad Zombie :(");
} 
else if(Runner1.position <= Zombie.position){
  alert("Daryl been eaten!!");
}
else if(Runner2.position <= Zombie.position){
  alert("Rick has been eaten!");
}
else{
  alert("Carl has been eaten!!");
}

console.log(Runner1.report());
console.log(Runner2.report());
console.log(Runner3.report());
console.log(Zombie.report());
});
});