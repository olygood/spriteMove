//Variables-----------------------------------------
const canva = document.getElementById('canva');
let ctx = canva.getContext('2d');
let interval;
let lastUpdate = 0;
let FPS = 0;

canva.width = 400
canva.height = 400
//fonction game-----------------------------------
//la fonction requestAnimationFrame renvoi un timeframe donc le capturer dans la fonction comme parametre
function run(timeFrame)
{
    requestAnimationFrame(run);

    let deltaTime = (timeFrame- lastUpdate) /1000;
    //astuce pour limiter a 30fps : explosion ralentissement du jeu 
    //une fois le delta time calculer : le 0.001 c'est pour fignoler l'ajustement
    //  if(deltaTime<(1/30 - 0.001))
    //  {return;}
    lastUpdate = timeFrame;
    FPS = 1/deltaTime;
    update(deltaTime);
    ctx.clearRect(0,0,canva.width,canva.height);
    draw(ctx);
    showFPS();
}

function init()
{
    load();
    requestAnimationFrame(run);
}
init();

function showFPS()
{
    ctx.fillStyle ='black';
    ctx.font = "normal 16pt Arial";
    ctx.fillText(Math.floor(FPS) + "fps" ,10,20);
}