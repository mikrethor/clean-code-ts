class Rectangle {
    constructor(public width: number, public height: number) {
    }
}

class AreaCalculator {
    calculateRectangleArea(rectangle: Rectangle) {
        return rectangle.width * rectangle.height;
    }
}