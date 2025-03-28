function validateOrder(order: Order): void {
}

function applyDiscount(order: Order): void {
}

function saveOrder(order: Order): void {
}

function sendConfirmation(order: Order): void {
}

class Order {
    //
}


// Good example
function processOrder(order: Order) {
    validateOrder(order);
    applyDiscount(order);
    finalizeOrder(order);
}

function finalizeOrder(order: Order) {
    saveOrder(order);
    sendConfirmation(order);
｝
