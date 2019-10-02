class Arm {
    constructor(x = 100, y = 100, len = 10, theta = 0) {
        this.origin = createVector(x, y);
        this._len = len;
        this._theta = theta;
    }
    get place() {
        let place = 1;
        if (this.Child) {
            place += this.Child.place;
        }
        return place;
    }
    get end() {
        let end = createVector(this._len)
        end.rotate(this._theta);
        end.add(this.origin);
        return end;
    }
    Update(position, origin = this.origin) {
        
        const delta = p5.Vector.sub(position, origin);
        const deltaHeading = delta.heading() - this._theta;
        let sign = 1;
        // if (delta.mag() / this.place < this._len) {
            // sign = -1;
        // }
        this._theta += deltaHeading / this.place * sign;
        if (this.Child) {
            this.Child.origin = this.end;
            this.Child.Update(position, origin);
        }
    }
    Draw() {
        if (this.Child) { this.Child.Draw(); }
        push();
        stroke(color(0));
        line(this.origin.x, this.origin.y, this.end.x, this.end.y);
        pop();
    }
    Add() {
        if (!this.Child) { this.Child = new Arm(this.end.x, this.end.y, this._len); }
        else { this.Child.Add(); }
    }
}