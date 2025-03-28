// Bad example
let total = 0;

function addToTotal(value: number) {
    total += value;
}

// Good example (no side effect)
function add(a: number, b: number): number {
    return a + b;
}
