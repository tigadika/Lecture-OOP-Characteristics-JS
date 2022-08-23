class Car {
  #modelNumber
  constructor(brand, price, modelNumber) {
    this.brand = brand
    this.price = price
    this.#modelNumber = modelNumber
  }

  get modNumGetter() {
    return this.#modelNumber
  }

  set modNumGetter(num) {
    this.#modelNumber = num
  }

  applyDiscount() {
    console.log("Processing discount...");
  }
}

class Toyota extends Car {
  constructor(price, modelNumber, color) {
    super("Toyota", price, modelNumber)
    this.color = color
  }
}

class Honda extends Car {
  constructor(price, modelNumber, color) {
    super("Honda", price, modelNumber)
    this.color = color
  }

  applyDiscount() {
    super.applyDiscount()
    console.log("Discount applied");
  }
}

const carInstance = new Car("honda", 1500, 726876276287)
const camry = new Toyota(2000, 71651687, "black")
const jazz = new Honda(2500, 6761876871, "white")
// console.log(carInstance)
camry.applyDiscount()
jazz.applyDiscount()

// console.log(camry.modNumGetter)
// console.log(jazz.modNumGetter)