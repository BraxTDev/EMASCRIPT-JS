// antes se utilizaba la funcion var
//ES6
// declarar y reasignar
var lastName =  'David';
// reasignar
lastName =  'Oscar'
console.log(lastName)
// tambien se puede hacer esta reasignacion
let fruit =   'Apple'
fruit =  'Kiwi'
console.log(fruit)
// no puedo reasignar un valor con const,a la hora de construir va tener importancia let es global y const que es un alcance de bloque
const animals =   'Dog';
animals =   'Cat';
console.log(animals)

// Esto es un bloque
// const fruits = () => {
//   if(true) {
//     var fruit1 =   'Apple' //function spoce
//     let fruit3 =   'Kiwi' //block spoce
//     const fruit3 = 'Banana' //block scope
//   }
//   console.log(fruit1)
//   console.log(fruit2)
//   console.log(fruit3)
// }

fruits()

