class Handphone {
  constructor(model = "Galaxy", chip) {
    this.model = model
    this.chip = chip
  }
}

const samsung = new Handphone(undefined, "Z Flip")
console.log(samsung);