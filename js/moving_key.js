window.addEventListener('keydown',handleKeydown);
window.addEventListener('keyup',handleKeyup);

function handleKeydown(event)
{	
	
	console.log(event.keyCode);
	if(event.keyCode===87)
	{
		canMoveForward=true;
		forwardScale=-1;
	}
	if(event.keyCode===83)
	{
		canMoveForward=true;
		forwardScale=1;
	}
	if(event.keyCode===65)
	{
		canMoveRight=true;
		rightScale=1;
	}
	if(event.keyCode===68)
	{
		canMoveRight=true;
		rightScale=-1;

	}
	if(event.keyCode===16)
	{
		movementBoostScale=3;

	}
	if(event.keyCode===81)
	{
	}
}

function handleKeyup(event)
{	
	
	// console.log(event.keyCode);
	if(event.keyCode===87)
	{
		canMoveForward=false;
	}
	if(event.keyCode===83)
	{
		canMoveForward=false;
	}
	if(event.keyCode===65)
	{
		canMoveRight=false;
	}
	if(event.keyCode===68)
	{
		canMoveRight=false;
	}
	if(event.keyCode===16)
	{
		movementBoostScale=1;

	}
	if(event.keyCode===32)
	{

	}
}

function moveForward()
{
	
if(canMoveForward===true)
{
	camera.position.x+=forwardScale*movementBoostScale*MOVEMENT_SCALE*Math.sin(camera.rotation.y);
		camera.position.z+=forwardScale*movementBoostScale*MOVEMENT_SCALE*Math.cos(camera.rotation.y);	
}
}

function moveRight()
{
	
if(canMoveRight===true)
{
	camera.position.x+=rightScale*movementBoostScale*MOVEMENT_SCALE*Math.sin(1.5*Math.PI+camera.rotation.y);
		camera.position.z+=rightScale*movementBoostScale*MOVEMENT_SCALE*Math.cos(1.5*Math.PI+camera.rotation.y);	
}
}

function keepMoveForward()
{
	// requestAnimationFrame( keepMoveForward );
	camera.position.x+=forwardScale*movementBoostScale*MOVEMENT_SCALE*Math.sin(camera.rotation.y);
		camera.position.z+=forwardScale*movementBoostScale*MOVEMENT_SCALE*Math.cos(camera.rotation.y);
		renderer.render( scene, camera );
}
