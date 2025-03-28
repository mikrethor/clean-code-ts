function doSomething(): void {
    //
}

let a = 0
let b = 0
let c = 0

// Bad example
if (a > 10 && b < 5 || c == 7) {
    doSomething();
}
// Good example
const isConditionMet = (a > 10 && b < 5) || c === 7;
if (isConditionMet) {
    doSomething();
}