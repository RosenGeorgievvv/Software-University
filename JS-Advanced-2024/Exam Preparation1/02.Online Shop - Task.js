

class OnlineShop {
    warehouseSpace;
    products = [];
    sales = [];

    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;

    }

    loadingStore(product, quantity, spaceRequired){
        
    }

}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.loadingStore('TV', 40, 500));