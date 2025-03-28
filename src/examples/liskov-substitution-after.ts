interface Bird {
}

interface FlyingBird extends Bird {
    fly(): void;
}

class Sparrow implements FlyingBird {
    fly() {
        console.log("I fly");
    }
}

class Penguin implements Bird {
    swim() {
        console.log("I swim");
    }
}