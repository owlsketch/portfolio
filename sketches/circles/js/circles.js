/* Symmetry
 * Defines four canvas elements, loops through them applying
 * two functions, the first which will draw the lines ranging 
 * from 3 to 8 lines randomly,i (drawBorder). The second function
 * drawCirc() draws the circles in the foreground, their 
 * position is random, but bounded to a specified region.
 */
for(var k = 0; k < 4; k++)
{
var canvas = document.getElementsByTagName('canvas')[k];
	var context = canvas.getContext('2d');
	var imgObj = new Image();

	function drawCirc (xvar, yvar, radius)
	{
	context.beginPath();
	context.arc(xvar + 25, yvar + 25,radius, 0, 2* Math.PI, false);
	context.fillStyle = '#EEEEEE';
	context.fill();
	context.lineWidth = 1;
	context.strokeStyle = '#222233';
	context.stroke();
	}

	function drawBorder(canv)
	{
		var numOfLines = Math.floor(Math.random() * 6.99) + 3;
		switch(canv) {
		 case 0:
		 	var xpos = new Array(0, 250, 0, 50, 100, 150, 0, 0, 0);
			var ypos = new Array(250, 0, 0, 0 , 0, 0, 50, 100, 150);
			var xorigin = new Array(240, 230, 220, 250, 250, 250);
			var yorigin = new Array(250,250,250, 240,230,220);
		 	for(var linedrawn = 0; linedrawn < numOfLines; linedrawn++)
			{
				context.beginPath();
				if(linedrawn < 3)
					context.moveTo(250,250); //always start at origin point
				else
					context.moveTo(xorigin[linedrawn - 3], yorigin[linedrawn-3]);
				context.lineTo(xpos[linedrawn], ypos[linedrawn]);
				context.stroke();
				context.closePath();
			}	
			break;
		 case 1:
		 	var xpos = new Array(0, 250, 250, 200, 150, 100, 250, 250, 250);
			var ypos = new Array(0, 0, 250, 0 , 0, 0, 50, 100, 150);
			var xorigin = new Array(10, 20, 30, 0, 0, 0);
			var yorigin = new Array(250,250,250, 240,230,220);
		 	for(var linedrawn = 0; linedrawn < numOfLines; linedrawn++)
			{
				context.beginPath();
				if(linedrawn < 3)
					context.moveTo(0,250); //always start at origin point
				else
					context.moveTo(xorigin[linedrawn - 3], yorigin[linedrawn-3]);
				context.lineTo(xpos[linedrawn], ypos[linedrawn]);
				context.stroke();
				context.closePath();
			}	
			break; 
		 case 2:
		 	var xpos = new Array(0, 250, 0, 50, 100, 150, 0, 0, 0);
			var ypos = new Array(0, 250, 250, 250 ,250, 250, 200, 150, 100);
			var xorigin = new Array(240, 230, 220, 250,250,250);
			var yorigin = new Array(0,0,0, 10,20,30);
		 	for(var linedrawn = 0; linedrawn < numOfLines; linedrawn++)
			{
				context.beginPath();
				if(linedrawn < 3)
					context.moveTo(250,0); //always start at origin point
				else
					context.moveTo(xorigin[linedrawn - 3], yorigin[linedrawn-3]);
				context.lineTo(xpos[linedrawn], ypos[linedrawn]);
				context.stroke();
				context.closePath();
			}	
			break;
		 case 3:
		 	var xpos = new Array(250, 0, 250, 200, 150, 100, 250, 250, 250);
			var ypos = new Array(0, 250, 250, 250 , 250, 250, 200, 150,100);
			var xorigin = new Array(10, 20, 30, 0, 0, 0);
			var yorigin = new Array(0,0,0, 10,20,30);
		 	for(var linedrawn = 0; linedrawn < numOfLines; linedrawn++)
			{
				context.beginPath();
				if(linedrawn < 3)
					context.moveTo(0,0); //always start at origin point
				else
					context.moveTo(xorigin[linedrawn - 3], yorigin[linedrawn-3]);
				context.lineTo(xpos[linedrawn], ypos[linedrawn]);
				context.stroke();
				context.closePath();
			}	
			break;
		 default:
		}

	}

	context.strokeStyle = '#111111';
	drawBorder(k);

	var arr = [];
		arr.push({ xtop: '180', xbot: '100', ytop: '180', ybot: '100'});
		arr.push({ xtop: '115', xbot: '35', ytop: '180', ybot: '100' });
		arr.push({ xtop: '180', xbot: '100', ytop: '115', ybot: '35' });
		arr.push({ xtop: '115', xbot: '35', ytop: '115', ybot: '35'});
			

	for(var i = 0; i < 400; i++)
	{
		var xvar = Math.random() * 200;
		var yvar = Math.random() * 200;
		if((xvar < arr[k].xtop && xvar > arr[k].xbot) && (yvar < arr[k].ytop && yvar > arr[k].ybot))
		{
			continue;
		}
		for(var j = 14; j > 0; j = j - 3)
		{
			drawCirc(xvar, yvar, j);	
		}
	}


}
