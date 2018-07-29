canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
pen = canvas.getContext('2d');

let circles = [];
let colors = ['red','blue','purple'];
circles[0] = new Player(100, 100, 30, 'black',canvas,pen);

for(let i = 1; i<10; i++){
    let size = Math.random() * 15 + 5;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let color = colors[i % colors.length];
    circles[i] = new Circle(x,y,size, color, canvas, pen, circles [0]);
}
for(let i = 11; i<30; i++){
    let size = Math.random() * 15 + 10;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let color = colors[i % colors.length];
    circles[i] = new Enemy(x,y,size, color, canvas, pen, circles [0]);
}


function play(){
    pen.beginPath();
    pen.rect(0,0, canvas.width, canvas.height);
    pen.fillStyle = 'White';
    pen.fill();

    circles.forEach(circle => {
        circle.move();
        circle.draw();
    });
    requestAnimationFrame(play)
};
play()
