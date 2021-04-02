class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.prajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>2 &&this.body.position.x>200){
    var pos = [this.body.position.x, this.body.position.y]
    this.prajectory.push(pos);
    }
    for(var i = 0;i<this.prajectory.length;i++){
      image(this.smokeImage,this.prajectory[i][0],this.prajectory[i][1])

    }
  }
}
