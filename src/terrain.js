export default class Terrain {
    constructor(width, height) {
        let x = 0;
        let y = Math.random()*height/2 + height/2 - 10;
        this.path = [];

        while (x < width) {
            let prob = Math.random();
            if (prob < 0.45)
                y -= Math.pow(Math.random(), 2) * 30;
            else if (prob < 0.9)
                y += Math.pow(Math.random(), 2) * 30;
            
            x += Math.random() * 10;
            y = Math.max(100, Math.min(height - 10, y));
            this.path.push({x, y});
        }
    }

    render(ctx) {
        ctx.save();
        ctx.beginPath();

        ctx.moveTo(this.path[0].x, this.path[0].y);        
        for (let point of this.path) 
            ctx.lineTo(point.x, point.y);
    
        ctx.stroke();
    }
}