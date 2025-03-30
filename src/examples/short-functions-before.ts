type Order = { id: number; amount: number; email: string; discount?: number };
let db: any[] = [];

function processOrder(x: Order) {
    if (x.id <= 0) throw new Error('Invalid order');
    if (x.amount <= 0) throw new Error('Invalid amount');
    if (!x.email.includes('@') || x.email.includes(' ')) throw new Error('Invalid email');

    console.log('Order valid');

    x.discount = x.amount > 100 ? x.amount * 0.1 : 0;
    x.amount -= x.discount;

    if (db.some(o => o.id === x.id)) throw new Error('Order already exists');
    db.push(x);

    if (Math.random() > 0.5) console.log('Email sent to ' + x.email);
    else throw new Error('Email failed');
}

