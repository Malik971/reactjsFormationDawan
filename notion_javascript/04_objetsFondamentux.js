const user = {
    firstName: "Malik",
    lastName: "Ibo",
    age: 24
}

class Car {
  name;
  model;
  year;
  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
  }
}
const car = new Car("Mama", "X5", 2019)

console.log(user);
console.log(car);
