function addX( id, speed )
{
 let element = document.getElementById(id);
 let elementstyles = window.getComputedStyle(element);
 let lastX = parseInt(elementstyles.marginLeft.replace("px",''));
 let movement = speed + lastX;
 console.log(movement);
 element.style.marginLeft = movement + "px";
 
}

function addY( id, speed )
{
 let element = document.getElementById(id);
 let elementstyles = window.getComputedStyle(element);
 let lastY = parseInt(elementstyles.marginTop.replace("px",''));
 let movement = speed + lastY;
 console.log(movement);
 element.style.marginTop = movement + "px";
}

function moveTo( id, x, y, speed)
{
	let element = document.getElementById(id);
	let elementstyles = window.getComputedStyle(element);
	let lastY = parseInt(elementstyles.left.replace("px",''));
	let nextY = 0;
	let lastX = parseInt(elementstyles.left.replace("px",''));
	let nextX = 0;
	nextY=0;
	nextX=0;

	let max = Math.max( y, x);
	for( let i = 0; i < max; i++)
	{
		if( nextY < y)
		{
			nextY = nextY + speed;
			addY(id,speed);
		}if( nextY > y)
		{
			nextY = nextY - speed;
			addY(id,-1*speed);
		}
		if( nextX < x)
		{
			nextX = nextX + speed;
			addX(id,-1*speed);
		}if( nextX > x)
		{
			nextX = nextX - speed;
			addX(id,speed);
		}
	}
}