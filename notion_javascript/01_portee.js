
  var myVar = "Hello"
  let myLet = "Hello"
  const myConst = "Hello"


  console.log(myLet);
  console.log(myConst);
  console.log(myVar);

var x = 10;
console.log("1", x); // 10 -> le var prend la priorité

{
    let x = 2;

    console.log("2", x); // 2 -> Le let est dans le bloc {} il est donc prioritaire

    var y = 5;
    const z = 6;

}

console.log("3", x); // 10 -> le let ne peut pas sortir du bloc {} donc c'est le var qui est lu.
console.log("4", y); // 5-> le var peut sortir du bloc
console.log("5", z); // Erreur -> le const ne peut pas sortir de son bloc {}