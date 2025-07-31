class Car {
  static countN = 0
  constructor(name) {
    this.name = name;
  }
  static count() {
    countN += 1
    return countN;
  }
}
const myCar = new Car("Ford");
console.log(Car.count())