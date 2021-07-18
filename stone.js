class stone{
constructor(x,y){
    var options = {
    restitution:0.8,
    friction:0.9,
    density:12

}
this.x=x
this.y=y
this.stone.options(14,89);
}
display(){

    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('white')
    fill('orange')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  
}
}