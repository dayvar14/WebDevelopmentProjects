function checkKeys()
{
	document.onkeydown = function(e) {
    switch (e.keyCode) 
		{
        case 37:
            rightPressed = true;
			xDirection = -1;
            break;
        case 38:
            upPressed = true;
			yDirection = -1;
            break;
        case 39:
            leftPressed = true;
			xDirection = 1;
            break;
        case 40:
            downPressed = true;
			yDirection = 1;
            break;
		}
    }
	document.onkeyup = function(e) {
    switch (e.keyCode) 
		{
         case 37:
            rightPressed = false;
            break;
        case 38:
            upPressed = false;
            break;
        case 39:
            leftPressed = false;
            break;
        case 40:
            downPressed = false;
            break;
		}
	}
}