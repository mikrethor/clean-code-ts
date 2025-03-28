// Bad example
class Bird {
    fly() {
        console.log("Je vole");
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Je ne peux pas voler");
    }
}