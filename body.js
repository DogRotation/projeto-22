class Body {
    constructor(x, y, w, h,){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.baseImage = loadImage("assets/base.png");
    this.player = loadImage("assets/player.png");
    }

    show(){
        push();
        imageMode(CENTER);
        image(this.baseImage,windowWidth/3, windowHeight/8,60,60,);
        image(this.player,windowWidth/3, windowHeight/8 -40,60,60,);
        pop();
    }
}