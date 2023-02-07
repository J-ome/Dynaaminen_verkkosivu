export default class Product {
    id = 0
    name = ""
    description = ""
    price = 0
    image = ""

    constructor(id, name, description, price, image) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.image = image
    }
}