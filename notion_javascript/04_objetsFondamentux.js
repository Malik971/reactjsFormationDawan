const user = {
  firstName: "Malik",
  lastName: "Ibo",
  age: 24,
};

class Car {
  #name;
  model;
  year;
  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
  }
  display() {
    console.log(
      `Voiture, nom: ${this.#name}, modèle : ${this.model}, annee: ${this.year}`
    );
  }
  get name() {
    return this.#name;
  }
  set name(newValue) {
    console.log("Modification en passant par le setter");
    if (newValue === "" || !newValue) {
      throw new Error("'name' de l'objet 'Car' est obligatoire");
    }
    this.#name = newValue;
  }
}

const car = new Car("Mer", "X5", 2019);

console.log(user);
console.log(car);

// 3.Accès aux propriétés et aux méthodes de class d'un objet
const name2 = user.firstName;
const model = car.model;
car.display();
console.log(name2);
console.log(model);

// 3.bis Accès aux propriétés d'un objet avec les accesseurs
const age = user["age"];
const year = car["year"];
console.log(age);
console.log(year);

// 4. Accès aux propriétés avec un getter
const car2 = new Car("Audi", "A4", 2025);
console.log(car2.name);

car2.name = null;
console.log(car2.name);


// 5. Modificafion  d'une valeur d'une propiété
user.firstName = "James";
car2.name = "Mercedes";
console.log(user.firstName, car2.name);

// 6. Copie d'objet
let car6 = new Car("Ford", "Focus", 2022)

let carCopy = car6

console.log(car6, carCopy);

carCopy.year = 2016
console.log("car6, year", car6.year);
console.log("carCopy, year", carCopy.year);

// Copie propre
let carCopyPropre = new Car("copy")
Object.assign(carCopyPropre, car6)
console.log(carCopyPropre);

let copy = Object.assign({}, car6);
console.log(copy);

// copie propre avec spread_operator


