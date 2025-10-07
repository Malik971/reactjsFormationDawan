const numbresOne = [1, 2, 3, 4, 5];
const numbersTwo = [6, 7, 8, 9, 10];
const objOne = {one:1,two:2,three:3}

console.log(...numbresOne);

const copy1 = [...numbresOne]
console.log(copy1);
const copyobj = {...objOne}
console.log(copyobj);


copy1.push(6);
console.log(numbresOne, copy1);

// Pour concaténer (/fusionner)deux tableaux
const allNumbers = [...numbresOne, ...numbersTwo]
console.log(allNumbers);

// En parametre d'une function
const add = (...numbers) => {
  let result=0
  
  numbers.forEach((n)=> result = result + n)
  console.log(numbers);
  return numbers
}

const addWithReduce =(...numbers) => {
  return numbers.reduce((total, n) => total + n)
}

const result = add(1,2,3,4,5,6,7,8,1001)
const result2 = addWithReduce(1,2,3,4,5)

user = {
  prenom: "malik",
  nom: "ibo",
  age: 24
}

userCopy ={...user}
console.log(userCopy);

userCopy.prenom = "Orlane"
console.log(userCopy);

user2 = { ...user, city: "New York"}
console.log(user2);


userInfo = {
  num: "01234567",
  city: "Ville Malik"
}

user3 = {
  ...user, userInfo
}

console.log(user3);

const cars = ["Mustang", "Corvette", "F-150", "Focus"];

const [car1, car2, car3, car4] = cars

console.log(car1, car2, car3, car4);

const calculate = (a, b) => {
  const add = () => a + b;
  const sub = () => a - b;
  const mul = () => a * b;
  const div = () => a / b;
 
  return [add, sub, mul, div];
};

const [add2, sub, , div] = calculate(2 , 1)
console.log(add(), sub(), div());

const numbers = [1,2,3,4,5,6,7,8]
const [a, b, ...c] = numbers

console.log(c);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const {d,e, ...f} = person
console.log(f);






