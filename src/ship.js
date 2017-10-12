export default class Ship {
    constructor(width, height) {
        this.pos = {x: width/2, y: 100};
        this.angle = 0;
    }

    render(ctx) {
        ctx.save();
        ctx.strokeStyle = "#fff";
        ctx.rotate(this.angle);
        ctx.moveTo(this.pos.x, this.pos.y + 5);
        ctx.lineTo(this.x + 2, this.y - 5);
        ctx.lineTo(this.x - 2, this.y - 5); 
        ctx.closePath();
        ctx.restore();
    }
}