function hello() {
  console.log("Malik Ibo");
  
}

function helloName(name){
  return "Hello " + name
}

hello()
const result = helloName("Malik le boss")
console.log(result);
console.log(helloName("2 fois"));

const flechee = () => {
  console.log("on est dans une flèche");
   
}

const helloFlecheeName = (name) => "on est dans une flèche " + name


flechee()

console.log(helloFlecheeName('Malik'));

