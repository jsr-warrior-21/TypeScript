"use strict";
class Product {
    name;
    price;
    pid;
    inCart;
    isPurchased;
    constructor(name, price, pid) {
        this.name = name;
        this.price = price;
        this.pid = pid;
        this.inCart = false;
        this.isPurchased = false;
    }
    isInCart() {
        this.inCart = true;
        console.log("Product added into the cart successfully !!");
    }
    isBuyed() {
        if (this.inCart) {
            return "Product purchased successfully.";
        }
        else {
            return "Product is not in the cart.";
        }
    }
}
;
class Order extends Product {
    constructor() {
        super('laptop', 100000, 101);
    }
    getpid() {
        return this.pid;
    }
}
var order = new Order(); // here you are able to access the price via child element but pid is protected
console.log(order.getpid());
var newProduct = new Product("IQOO", 72000, 1);
console.log(newProduct);
console.log(newProduct.isInCart());
console.log(newProduct.isBuyed());
