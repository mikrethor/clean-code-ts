interface Shape {
    getArea(): number;
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
    }

    getArea() {
        return this.width * this.height;
    }
}

class Circle implements Shape {

    constructor(private radius: number) {
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}