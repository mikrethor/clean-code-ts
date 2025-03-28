interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

class Human implements Workable, Eatable {
    work() {
        console.log("I work");
    }

    eat() {
        console.log("I eat");
    }

}

class Robot implements Workable {
    work() {
        console.log("I work");
    }
}