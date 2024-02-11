

class OnlineShop {
    warehouseSpace;
    products = [];
    sales = [];

    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;

    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error('Not enough space in the warehouse.');
        }
        this.products.push({
            product,
            quantity
        });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {
        const info = this.products.find(p => p.product == product);

        if (!info) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.')
        }
        if (info.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`
        }else{
            const diff = minimalQuantity - info.quantity;
            info.quantity = minimalQuantity;
            return `You added ${diff} more from the ${product} products.`
        }
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.loadingStore('TV', 40, 500));