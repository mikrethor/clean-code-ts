class Item {
    constructor(label: string, price: number) {
    }
}

class ShoppingCart {
    addItem(item: Item) {
    }

    calculateTotalPrice() {
    }
}

// Unit test with Jest
test('should calculate total price correctly', () => {

    const cart = new ShoppingCart();

    cart.addItem(new Item('Book', 10));

    cart.addItem(new Item('Pen', 2));

    expect(cart.calculateTotalPrice()).toBe(12);
});