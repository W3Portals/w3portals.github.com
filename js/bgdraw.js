

var ctx = Sketch.create({
	container: document.getElementById('center'),  
    });

ctx.setup = function()
{
  this.process = new Process3();

  this.array = new Array ();

  for (var i=0; i<ctx.height/31; i++) 
  {
    this.array.push(new Element (new Circle()));  
  }
}

ctx.update = function()
{
 for (var i=0; i<this.array.length; i++) 
 {
 	this.array[i].updateElement();
 	for (var j=0; j<this.array.length; j++)
 	{
 		if (i!=j)
 		{
	 	 this.array[i].updateElement2(this.array[j]);
	 	}
 	}
 }
}

ctx.draw = function()
{
  this.process.DrawProcess(this.array);
}

ctx.clear = function(){
  this.process.ClearProcess();  
};


function Process1() // Draw elements
{
	this.DrawProcess = function(array)
	{
		 for (i=0; i<array.length; i++) 
		 {
		 	array[i].drawElement();
		 }
	}

	this.ClearProcess = function()
	{
		ctx.fillStyle = 'red';
		ctx.fillRect( 0, 0, ctx.width, ctx.height );
		ctx.fill();		
	}
}


function Process2()  // Draw elements with transparency trails
{
	this.DrawProcess = function(array)
	{
		 for (i=0; i<array.length; i++) 
		 {
		 	array[i].form.color ='rgba(200,200,200,0.05)';
		 	array[i].drawElement();
		 }
	}

	this.ClearProcess = function()
	{
	}
}

function Process3()  // Draw transparent lines between center of colliding objects
{
	this.DrawProcess = function(array)
	{
		 for (i=0; i<array.length; i++) 
		 {
			 for (j=i+1; j<array.length; j++) 
			 {
		 		if(array[i].form.collision(array[j].form))
				{
					ctx.beginPath();
					ctx.strokeStyle = 'rgba(150, 50, 50,0.05)';
					ctx.moveTo(array[i].form.x,array[i].form.y);
					ctx.lineTo(array[j].form.x,array[j].form.y);
					ctx.stroke();
				}
			 }
		 }
	}

	this.ClearProcess = function()
	{
	}
}



function Circle()
{
	this.x = Math.random()*ctx.width ;
	this.y = Math.random()*ctx.height ;
	this.a = Math.random()*2*Math.PI;
	this.m = Math.random()*0.8*Math.PI;

	this.radius = 10+Math.floor(Math.random()*150);
	this.color = 'rgba( 200, 200, 200 , 100)';

	this.drawForm = function() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		ctx.LineWidth = 5 ;
		ctx.strokeStyle = this.color;
        ctx.stroke();
	}	

	this.collision = function(autre)
	{
		var d = Math.sqrt (
					Math.pow(this.x-autre.x,2) +
					Math.pow(this.y-autre.y,2)
					);

		return (d< this.radius + autre.radius);
		// Equivalent a
		// if (d< this.radius + autre.radius)
		// {
		// 	return true;
		// }
		// else
		// {
		// 	return false;
		// }
	}
}

function Line()
{
	this.x = Math.random()*ctx.width ;
	this.y = Math.random()*ctx.height ;
	this.a = Math.random()*2*Math.PI;
	this.m = Math.random()*0.8*Math.PI;

	this.size = 10+Math.floor(Math.random()*70);
	this.color = 'rgba( 255, 255, 255 , 100)';

	this.drawForm = function() {
		ctx.beginPath();
		ctx.LineWidth = 5 ;
		ctx.strokeStyle = this.color;
		var dx = this.size*cos(this.a);
		var dy = this.size*sin(this.a);
		ctx.moveTo(this.x-dx, this.y-dy);
		ctx.lineTo(this.x+dx, this.y+dy);
        ctx.stroke();		
	}

	this.collision = function(autre)
	{

		var dx1 = this.size*cos(this.a);
		var dy1 = this.size*sin(this.a);

		var a1 = {
		  x: this.x - dx1,
		  y: this.y - dy1
		};

		var a2 = {
		  x: this.x + dx1,
		  y: this.y + dy1	
		};

		var dx2 = autre.size*cos(autre.a);
		var dy2 = autre.size*sin(autre.a);

		var b1 = {
		  x: autre.x - dx2,
		  y: autre.y - dy2
		};

		var b2 = {
		  x: autre.x + dx2,
		  y: autre.y + dy2
		};

	    var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
	    var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
	    var u_b  = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);

	    if ( u_b != 0 ) {
	        var ua = ua_t / u_b;
	        var ub = ub_t / u_b;

	        if ( 0 <= ua && ua <= 1 && 0 <= ub && ub <= 1 ) {
	        	return true;
	        } 
	    }

	    return false;

	}
}


function Behavior1() // Straight line
{
	this.Apply = function(form)
	{
		form.x = form.x + form.m*cos(form.a); 
		form.y = form.y + form.m*sin(form.a);
	}

	this.Apply2 = function(form1, form2)
	{
		
	}	
}

function Behavior2() // Side warping
{
	this.Apply = function(form)
	{
		if (form.x<0)
		{
			form.x = ctx.width;
		}
		else if (form.x>ctx.width)
		{
			form.x = 0;
		}

		if (form.y<0)
		{
			form.y = ctx.height;
		}
		else if (form.y>ctx.height)
		{
			form.y = 0;
		}
	}

	this.Apply2 = function(form1, form2)
	{
		
	}	
}

function Behavior3() // Rotate on collision
{
	this.Apply = function(form)
	{
	}

	this.Apply2 = function(form1, form2)
	{
		if(form1.collision(form2))
		{
			form1.a += 0.01;
		} 
	}
}

function Behavior4() // Spread on collision
{
	this.Apply = function(form)
	{
	}

	this.Apply2 = function(form1, form2)
	{
		if(form1.collision(form2))
		{
			var reject = new Vector(form2.x - form1.x, form2.y - form1.y);
			var dist = reject.Size() / 10;

			if (dist != 0)
			{
				reject.Normalize();
				reject.Div(Math.pow(dist,2));
				reject.Trim(1);

				var velocity = new Vector();
				velocity.SetMagAngle(form1.m, form1.a);
				velocity.Sub(reject);

				form1.a = velocity.GetAngle();
				form1.m = velocity.Size();
			}

		} 
	}
}



function Element(myForm) 
{

	this.form = myForm;
	this.behaviors = new Array();

	this.behaviors.push(new Behavior1());
	this.behaviors.push(new Behavior2());
	this.behaviors.push(new Behavior3());
	this.behaviors.push(new Behavior4());

	this.drawElement = function()
	{
		this.form.drawForm();
	}

	this.updateElement = function()
	{
		 for (var i=0; i<this.behaviors.length; i++) 
		 {		
			this.behaviors[i].Apply(this.form);
		}
	}

	this.updateElement2 = function(autre)
	{
		 for (var i=0; i<this.behaviors.length; i++) 
		 {		
			this.behaviors[i].Apply2(this.form, autre.form);
		}		
	}
}


function Vector(dx, dy)
{
	this.dx = dx;
	this.dy = dy;

	this.SetMagAngle = function(m,a)
	{
		this.dx = m*cos(a);
		this.dy = m*sin(a);
	}

	this.Add = function(vector2)
	{
		this.dx += vector2.dx;
		this.dy += vector2.dy;
	}

	this.Sub = function(vector2)
	{
		this.dx -= vector2.dx;
		this.dy -= vector2.dy;
	}

	this.Mult = function(value)
	{
		this.dx *= value;
		this.dy *= value;
	}

	this.Div = function(value)
	{
		this.dx /= value;
		this.dy /= value;
	}

	this.Size = function()
	{
		return Math.sqrt(Math.pow(this.dx ,2) + Math.pow(this.dy ,2));		
	}

	this.Normalize = function()
	{
		var size = this.Size();
		if (size != 0)
		{
			this.Div(size);
		}
	}

	this.Trim = function(value)
	{
		var size = this.Size();
		if (size > value)
		{
			var ratio = size/value;
			this.Div(ratio);
		}
	}

	this.GetAngle = function()
	{
		return Math.atan2(this.dy, this.dx);
	}
}