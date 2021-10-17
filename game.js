let img;
let img2;

function load()
{
    img = new Sprite("images/satellite_C.png");
    img2 = new Sprite("images/satellite_C.png",100,50);
}
function update()
{
    img.x +=1;
    img.y +=1;
    img2.y += 1;
}
function draw(pCtx)
{
    img.draw(pCtx)
    img2.draw(pCtx)
}
