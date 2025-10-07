// Données initiales
const taskList = [
  { id: 1, title: "Acheter du lait", completed: false },
  { id: 2, title: "Répondre aux emails", completed: true },
  { id: 3, title: "Faire du sport", completed: false },
];
 
// 1. Utilisez la destructuration pour extraire le titre et le statut (completed) de la première tâche
// Stockez-les dans des variables nommées "firstTaskTitle" et "firstTaskStatus"
// const tasks = [...taskList]
// console.log(tasks);
// const [task1, task2, task3] = tasks;

// console.log(task1, task2, task3)

// const [task4, ,] = tasks
// console.log(task4);
// const { id, title, completed } = task4;
// let firstTaskTitle = title
// console.log(firstTaskTitle);
// let firstTaskStatus = completed
// console.log(firstTaskStatus);

const [{firstTaskTitle: title, firstTaskStatus:completed}] = taskList




 
// 2. Utilisez le spread operator pour créer une copie du tableau taskList
// nommée "taskListCopy"

const taskListCopy = [taskList]
console.log(taskListCopy);

 
// 3. Copier le dernier objet de la liste, remplacer le title par 'Faire de la musique'
// + ajouter une nouvelle propriété "priority" avec une valeur de 1

const [,,lastTask] = taskList
const copy = {...lastTask, title: "Faire de la musique", priority: 1}
console.log(copy);


// 4. faire une fonction aui affiche les éléments passés en parametre dans un console.log
// --> On doit pourvoir passer autant de parametres que l'on veut quand appelle la fonction

const calculate = (...param) => {
  param.forEach((p) => console.log(p)
  )
}
calculate(5,1)
 
// 5. Faire un copie du tableau en ne gardant que les objets 'completed' qui sont égales à 'true'
//  --> Vous pouvez le faire aec le .filter()

const taskFiltered = taskList.filter((task) => task.completed === true) // pas obligé de mettre true parce que c'est déjà le cas
console.log(taskFiltered);
