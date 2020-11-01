window.onload = function() {
/* target = rgb values in THAT order
 * callback will be the function to run on
   bot trigger
 *
 */
 
 
// canv details
var canvas = document.getElementById("bot");
var context = canvas.getContext("2d");

var sqX = canvas.width
setInterval( function() {

context.beginPath();

//refresh
context.clearRect(0, 0, canvas.width, canvas.height);


// set red bg
context.fillStyle = "red";
context.fillRect(0, 0, canvas.width, canvas.height);

// draw trigger
context.fillStyle = "blue";
context.fillRect(sqX, 150, 10, 10);

// move trigger
if(sqX <= -10) {
	sqX = canvas.width;
} else {
sqX -=1;
}

}, 30)


 
 
class inBot {
	constructor($_001){
		this.speed = $_001;
		this.arrOfCol = [];
		this.pixelData = undefined;
		this.target = undefined;
		this.callback = undefined;
		this.context = undefined;
		this.interval = undefined;
		this.checkInterval = undefined;
	}
	
	setCoord (x, y, w=1, h=1) {
	// set Interval to keep checking
	this.interval = setInterval( () => {
		this.pixelData = this.context.getImageData(x, y, w, h);
this.arrOfCol[0] = this.pixelData.data[0];
this.arrOfCol[1] = this.pixelData.data[1];
this.arrOfCol[2] = this.pixelData.data[2];
	}, this.speed);
		
	}
	
	start () {
	this.checkInterval = setInterval(() => 
	{
let $_1 = JSON.stringify(this.arrOfCol);
let $_2 = JSON.stringify(this.target);

  if($_1 === $_2) {
	 this.callback();
  }
	}, this.speed);

}
	
	stop () {
		
	}
}


// bot details
var bot = new inBot(300);
bot.context = context;
bot.setCoord(100, 150); // set coords

bot.target = [0, 0, 255]; // target is blue. if our pixel area matches. trigger callback

bot.callback = function() {
	console.log("Target Color Found.");
};

bot.start();

}
