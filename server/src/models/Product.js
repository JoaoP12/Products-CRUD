class Product {
    constructor (id, title, description, price, stock, imgLink) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.imgLink = imgLink;
    }
}

module.exports = Product;