class Arm {
    constructor(x = 100, y = 100, len = 100, theta = 0) {
        this.origin = createVector(x, y);
        this.body = createVector(len);
        this.body.rotate(theta);
    }
    get len() {
        len = 1;
        if (this.Child) {
            len += this.Child.height;
        }
        return len;
    }
    Update() {
        // const mouse = createVector(mouseX, mouseY);
        print(this.len)
    }
    Draw() {
        if (this.Child) {
            this.Child.Draw();
        }
        push();
        stroke(color(0));
        const end = p5.Vector.add(this.origin, this.body);
        line(this.origin.x, this.origin.y, end.x, end.y);
        pop();
    }
    Add() {
        if (!this.Child) {
            this.Child = new Arm();
        }
        else {
            this.Child.Add();
        }
    }
}