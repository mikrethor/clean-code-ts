interface Worker {
    work(): void;

    eat(): void;
}

class Robot implements Worker {
    work() {
        console.log("Je travaille");
    }

    eat() {
        throw new Error("Je ne mange pas");
    }
}
