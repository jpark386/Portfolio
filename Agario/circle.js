let dead = 0;
class Circle{
    constructor(x,y,radius,color,canvas,pen,player){
        this.canvas = canvas
        this.pen = pen
        this.x = x;
        this.y = y;
        this.v1 = .5;
        this.v2 = .5;
        this.radius = radius;
        this.color = color;
        this.player = player;
        this.condition = 1
        this.isDead = false;
    }
    move(){
        if (this.isDead == true){
            return;
        }
        if (this.x <= this.radius){
            this.v1 = 1;
        }
        if (this.x > this.canvas.width-this.radius){
            this.v1 = -1;
        }
        if (this.y <= this.radius){
            this.v2 = 1;
        }
        if (this.y > this.canvas.height){
            this.v2 = -1;
        }
        this.x = this.x + this.v1
        this.y = this.y + this.v2
        if (this.collided()){
            this.color = 'white';
            this.isDead = true;
            setTimeout(()=>{
                this.isDead = false;
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
            }, 3000)
            
            this.player.radius = Math.pow(Math.pow(this.player.radius,2) + Math.pow(this.radius,2),.5);
            
        }
        else{
            this.color = 'blue';
        }
        let score = document.querySelector('div');
        score.innerText = Math.round(this.player.radius,2)
        score.style.fontSize = "50px";

    }
    collided(){
        if (dead == true){
            return;
        }
        let p = this.player;
        let c = this;
        let Collided = (Math.pow(p.x-c.x,2)+Math.pow(p.y-c.y,2)) <= Math.pow(p.radius,2)

        return Collided;

    }
    draw(){
        if (dead == true){
            return;
        }
        if (this.isDead == true){
            return;
        }
        this.pen.beginPath();
        this.pen.arc(this.x,this.y,this.radius,0, Math.PI * 2);
        this.pen.fillStyle = this.color;
        this.pen.fill();
        
        
    }
}

class Player extends Circle{
    constructor(x,y,radius,color,canvas,pen){
        super(x,y,radius,color,canvas,pen)

        this.targetX = x;
        this.targetY = y;
        this.speed = (60/(this.radius));

        document.addEventListener('mousemove',(event) => {
            this.targetX = event.clientX;
            this.targetY = event.clientY;


        })
    }
    move(){
        if (dead == true){
            return;
        }
        let dy = this.targetY - this.y
        let dx = this.targetX - this.x
        let angle = Math.atan2(dy, dx)
        let vx = this.speed * Math.cos(angle);
        let vy = this.speed * Math.sin(angle);
        this.x += vx;
        this.y += vy;
    }
}





class Enemy extends Circle{
    constructor(x,y,radius,color,canvas,pen,player){
        super(x,y,radius,color,canvas,pen,player)
        this.v1 = 2
        this.v2 = -2
    }
    move(){
        if (this.x <= this.radius){
            this.v1 = 2;
        }
        if (this.x > this.canvas.width-this.radius){
            this.v1 = -2;
        }
        if (this.y <= this.radius){
            this.v2 = 2;
        }
        if (this.y > this.canvas.height){
            this.v2 = -2;
        }
        this.x = this.x + this.v1
        this.y = this.y + this.v2

        if (this.collided()){
            dead = 1;
        }
        else{
            this.color = 'red';
        }
    }
    collided(){
       
        let p = this.player;
        let c = this;
        let Collided = (Math.pow(p.x-c.x,2)+Math.pow(p.y-c.y,2)) <= Math.pow(p.radius,2)


        return Collided;
    }
}
