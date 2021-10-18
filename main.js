
const canva = document.getElementById('canva');
let ctx = canva.getContext('2d');
let interval;
let lastUpdate = Date.now();

canva.width = 400
canva.height = 400
// let interval;
// let fps = 0;
// let dernierUpdate = 0;
function run()
{
    let atPresent = Date.now();
    let deltaTime = (atPresent - lastUpdate) /1000;
    lastUpdate = atPresent;

    update(deltaTime);
    ctx.clearRect(0,0,canva.width,canva.height);
    draw(ctx);
}
function init()
{
    
    load();
    interval = setInterval(run,1000/60);
}
init();
