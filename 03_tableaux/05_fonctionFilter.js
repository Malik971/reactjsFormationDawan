const words = ["spray", "elite", "exuberant", "destruction", "present"];
 
// const wordsFilter = words.filter((word)=> word.length > 6)
// console.log(wordsFilter);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numbers5 = numbers.filter((number)=> number > 5)
// const numbersmodulo = numbers.filter((number)=> number % 2 === 0)
// console.log(numbers5);
// console.log(numbersmodulo);

function textFilter(entreeUtilisateur){
  return entreeUtilisateur = words.filter((word)=> word.includes('es'))  
}

console.log(textFilter());

// fonction plus rapide la FLECHE

const textfast = words.filter((word)=> word.includes('es')) 

console.log(textfast);

