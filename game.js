//VARIABLE--------------------------------------------------
let img;
let img2;
let timer;
let keyRight = false;
let keyLeft = false;
let keyUp = false;
let keyDown = false;
//FUNCTION---------------------------------------------------

function touchKeyDown(e)
{
    e.preventDefault();

    if(e.code == 'ArrowRight')
    {
        keyRight = true;
    }
    if(e.code == 'ArrowLeft')
    {
        keyLeft = true;
    }
    if(e.code == 'ArrowUp')
    {
        keyUp = true;
    }
    if(e.code == 'ArrowDown')
    {
        keyDown = true;
    }
    
}

function touchKeyUp(e)
{
    e.preventDefault();
    if(e.code == 'ArrowRight')
    {
        keyRight = false;
    }
    if(e.code == 'ArrowLeft')
    {
        keyLeft = false;
    }
    if(e.code == 'ArrowUp')
    {
        keyUp = false;
    }
    if(e.code == 'ArrowDown')
    {
        keyDown = false;
    }
}
//LOAD--------------------------------------------------------
function load()
{
    img = new Sprite("images/satellite_C.png");
    img2 = new Sprite("images/satellite_C.png",100,50);
    timer = 0;
    document.addEventListener('keydown',touchKeyDown,false);
    document.addEventListener('keyup',touchKeyUp,false);
}
//UPDATE-----------------------------------------------------
function update(deltaTime)
{
    timer += deltaTime;
    if(timer >= 1){

        img.x +=10;
        img.y +=10;
        timer = 0;
    
    }   
   
       
    if(keyRight)
    {
        img2.x +=10;
    }
    if(keyLeft)
    {
        img2.x -=10;
    }
    if(keyUp)
    {
        img2.y -=10;
    }
    if(keyDown)
    {
        img2.y +=10;
    }

}

//DRAW----------------------------------------------------------    

function draw(pCtx)
{
    img.draw(pCtx)
    img2.draw(pCtx)
}
