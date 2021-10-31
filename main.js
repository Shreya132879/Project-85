canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

Car_height=100;
Car_width=150;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

Car_X=5;
Car_Y=5;

function add() {
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencar_y >=0){
        greencar_y = greencar_y - 10;
        console.log("When up arrow is pressed, x = "+greencar_y+ 1")
        canvas.remove(player_object);
        player_img();
    }
} 

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
