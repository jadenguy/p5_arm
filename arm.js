let s = 1
class Arm {
    constructor(x = 100, y = 100, len = 10, theta = 0, domain = TWO_PI) {
        this.origin = createVector(x, y);
        this.len = len;
        this.theta = theta;
        this.domain = domain;
    }
    get place() {
        let place = 1;
        if (this.child) {
            place += this.child.place;
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
        if (this.child) {
            return this.child.tip;
        } else {
            return this.end;
        }
    }
    Update(pos, origin = this.origin) {

        const position = p5.Vector.sub(pos, this.origin);
        const wantedHeading = p5.Vector.sub(this.end, this.origin);
        wantedHeading.rotate(-position.heading());

        const ratio = (1 / this.place) * clamp(s, 0, 1);
        this.theta -= ratio * wantedHeading.heading();
        this.Smooth();
        if (this.child) {
            this.child.origin = this.end;
            this.child.Update(pos, origin);
        }
    }
    Smooth() {
        if (this.child && this.child.child) {
            // const dV = createVector(0);
            // dV.rotate(this.child.theta);
            // dV.rotate(-this.child.child.theta)
            // const d = dV.heading() * this.place / 8;
            // this.theta -= d;
            // this.child.theta += d;
        }
    }
    Draw() {
        if (this.child) { this.child.Draw(); }
        push();
        stroke(color(0));
        strokeWeight(this.place);
        line(this.origin.x, this.origin.y, this.end.x, this.end.y);
        pop();
    }
    Add() {
        if (!this.child) { this.child = new Arm(this.end.x, this.end.y, this.len, this.theta, this.domain); }
        else { this.child.Add(); }
    }
}
function avg(a, b) {
    return (a + b) / 2;

}