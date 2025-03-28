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


// Bad example
function processOrder(order: Order) {
    validateOrder(order);
    applyDiscount(order);
    saveOrder(order);
    sendConfirmation(order);
}

