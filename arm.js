class Arm {
    constructor(x = 100, y = 100, len = 10, theta = 0) {
        this.origin = createVector(x, y);
        this.len = len;
        this.theta = theta;
    }
    get place() {
        let place = 1;
        if (this.Child) {
            place += this.Child.place;
        }
        return place;
    }
    get end() {
        let end = createVector(this.len)
        end.rotate(this._theta);
        end.add(this.origin);
        return end;
    }
    get theta() {
        return this._theta;
    }
    set theta(value) {
        var newTheta = createVector(1);
        newTheta.rotate(value);
        this._theta = newTheta.heading();
    }
    get tip() {
        if (this.Child) {
            return this.Child.tip;
        } else {
            return this.end;
        }
    }
    Update(pos, origin = this.origin) {
        // const position = p5.Vector.sub(pos, this.origin);
        // const joint = p5.Vector.sub(this.tip, 0);
        // const average = createVector(avg(position.x, joint.x), avg(position.y, joint.y));
        // this.theta = average.heading();

        // const num = random(100);
        // if (num < 1) {
        //     this.theta += QUARTER_PI * (random() - .5);
        // }

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
        if (!this.Child) { this.Child = new Arm(this.end.x, this.end.y, this.len, this.theta); }
        else { this.Child.Add(); }
    }
}
function avg(a, b) {
    return (a + b) / 2;

}