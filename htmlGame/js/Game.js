
function sprite(attributes)
{
	this.image = images[0];
	this.images = attributes.images;
	this.height = attributes.height;
	this.width = attributes.width;
	function play()
	{
		for( let i = 0; i < images.length; i++)
		{
			image = images[i];
		}
	}
	
	function getHeight()
	{
		return this.height;
	}
	
	function setHeight()
	{
		return this.height;
	}
	function getWidth()
	{
		return this.height;
	}
	
	function setWidth()
	{
		return this.height;
	}
}
function myCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img,10,10);
}
