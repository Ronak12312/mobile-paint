var lpox;
var lpoy;
canvas=document.getElementById("mc");
ctx=canvas.getContext("2d");
wots=screen.width;
nw=screen.width-70;
nh=screen.height-300;
color="black";
wotl=1;
if(wots<993){
    document.getElementById("mc").width=nw;
    document.getElementById("mc").height=nh;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",ts);
function ts(e){
    console.log("touchstart");
    color=document.getElementById("c").value;
    wotl=document.getElementById("w").value;
    lpox=e.touches[0].clientX-canvas.offsetLeft;
    lpoy=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",tm);
function tm(e){
    console.log("touchmove");
    cpox=e.touches[0].clientX-canvas.offsetLeft;
    cpoy=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=wotl;
console.log("last position of x ="+lpox+" last position of y ="+lpoy);
ctx.moveTo(lpox,lpoy);
console.log("current position of x ="+cpox+" current position of y ="+cpoy);
ctx.lineTo(cpox,cpoy);
ctx.stroke();
    lpox=cpox;
    lpoy=cpoy;
}
function clear(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
    console.log("clear");
}
