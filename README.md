# OOP Characteristic

> - Abstraction
> - Encapsulation
> - Inheritance
> - Polymorphism

## Abstraction

> Hides all but the relevant data about an object in order to reduce complexity and increase efficiency.

- Menspesifikasi apa yang akan dilakukan, tapi tidak how to nya
- A flexible feature for having an overall view of an object functionality
- Defining and executing abstract actions

```js
 class Car {
  constructor(model, price) {
    this.model = model
    this.price = price
  }

 applyDiscount(){
    let today = new Date() 
    let date = today.getDate()
    if (date % 2 === 0) {
      let discount = this.price * 0.1
      this.price -= discount 
      console.log(“Discount applied!”) 
    } else {
      console.log(“Failed apply discount”)
    }
  }
}
```

Method applyDiscount() ini akan menampilkan hasilnya, namun tidak prosesnya.

Contoh
- `Math.random()` dll
- `Array.join()` dll
- `date.getMonth()` dll

## Encapsulation

> Membungkus semua hal agar tidak dapat diakses semua orang, hanya yang berhubungan saja yang dapat mengaksesnya.

- Menyembunyikan detail - detail internal atau implementasi dari sebuah class melalui sebuah method
- Mengikat code dan/atau data secara bersamaan agar aman dari interfensi luar

Method yang dimaksud adalah `accessor` (`getter`) dan `mutator` (`setter`)

### cara untuk mengenkapsulasi suatu data/property adalah dengan menggunakan private property

```js
class Car {
  #modelNumber
  constructor(model, price, modelNumber) {
    this.model = model
    this.price = price
    this.#modelNumber = modelNumber
  }
}
```
maka property `modelNumber` menjadi private (tidak public) sehingga sudah terenkapsulasi/terlindungi

### cara untuk mengakses private adalah melalui method getter

```js
class Car {
  #modelNumber
  constructor(model, price, modelNumber) {
    this.model = model
    this.price = price
    this.#modelNumber = modelNumber
  }
}

get modelNumber() {
  return this.#modelNumber
}
```

### cara untuk mengubah private adalah melalui method setter

```js
class Car {
  #modelNumber
  constructor(model, price, modelNumber) {
    this.model = model
    this.price = price
    this.#modelNumber = modelNumber
  }

  get modelNumber() {
    return this.#modelNumber
  }

  set modelNumber(num) {
    this.#modelNumber = num
  }
}
```

### cara menggunakan getter & setter => tanpa di invoke

```js
honda.modelNumber
```
```js
honda.modelNumber = 8183710829
```

- private property
- public property
- protected property (unsupported by js)

## Inheritance

> suatu class dapat menurunkan semua property/attribute dan methodnya (extend) kedalam class lainnya
> dalam inheritance dikenal dengan istilah parent class dan child class

Contoh kita memiliki sebuah parent class
```js
class Car {
  #modelNumber
  constructor(model, price, modelNumber) {
    this.model = model
    this.price = price
    this.#modelNumber = modelNumber
  }

  get modelNumber() {
    return this.#modelNumber
  }

  set modelNumber(num) {
    this.#modelNumber = num
  }
}
```

lalu, jika kita ingin membuat sebuah child class bisa menggunakan keyword `extends`

```js
class Toyota extends Car {
  constructor(model, price, modelNumber, engineCap) {
    super(model, price, modelNumber)
    this.engineCap = engineCap
  }
}
```
> super merupakan keyword untuk mengakses/mengset property parent classnya

Maka class `Toyota` akan memiliki semua property dan method yang dimiliki oleh class `Car`

## Polymorphism

> Sebuah proses menggunakan method dengan nama yang sama oleh beberapa class yang berbeda dan mendefinisikan ulang method tsb untuk child class

ada 2 cara polymorphism dalam konsep OOP:
- Overloading (unsupported by JS)
- Overriding (JS)

contoh sebuah class parent memiliki property dan method sebagai berikut

```js
class Car {
  #modelNumber
  constructor(model, price, modelNumber) {
    this.model = model
    this.price = price
    this.#modelNumber = modelNumber
  }

  get modelNumber() {
    return this.#modelNumber
  }

  set modelNumber(num) {
    this.#modelNumber = num
  }

  start() {
    console.log(`This ${this.model} is starting`);
  }
}
```

lalu kita mengextends ke sebuah class child baru

```js
class Toyota extends Car {
  constructor(model, price, modelNumber, engineCap) {
    super(model, price, modelNumber)
    this.engineCap = engineCap
  }
}
```

maka class `Toyota` atau childnya ini akan mempunyai method `start()` juga yang sama dengan class parentnya.

Jika pada suatu kondisi class `Toyota` ini ingin memakai method `start()` namun dengan output yang berbeda, maka dapat memanfaatkan karakteristik OOP polymorphism Overriding

```js
class Toyota extends Car {
  constructor(model, price, modelNumber, engineCap) {
    super(model, price, modelNumber)
    this.engineCap = engineCap
  }

  start() {
    console.log(`This ${this.model} with engine ${this.engineCap} cc is starting`)
  }
}
```

Maka outputnya akan berbeda... Jika ingin mengambil isi dari start sebelumnya maka tetap menggunakan `super` contoh `super.start()`

Benefit dari inheritance dan polymorphism:
- Extensibility
- Reusablitiy
- Eliminate Redudancy