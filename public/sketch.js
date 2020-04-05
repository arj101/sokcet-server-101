

const socket = io();

function setup(){
  createCanvas(720,540);
  background(20);
  socket.on('mouse', (data) =>{
    noStroke();
    fill(255,100,10);
    ellipse(data.x,data.y,30);
  });
}

function mouseDragged(){
  if(mouseX >= -30 && mouseX <= width + 30 && mouseY >= -30 && mouseY <= height + 30){
  noStroke();
  fill(255,10,100);
  ellipse(mouseX,mouseY,30);
  const data = {
    x:Math.floor(mouseX),
    y:Math.floor(mouseY)
  }
  socket.emit('mouse',data);
}

}
