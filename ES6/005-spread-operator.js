// logica spread operator
// un objeto
let person = {name:  'Oscar', age: 28}
let country =  'MX';

// QUE SE UNAN ESTOS DOS ELEMENTOS
//... puntos para lo que se encuentre aqui, se asigne a este nuevo objeto de traer la informacion y agregar nueva
let data = {id: 1, ...person, country}
console.log(data)

//parametros rest

function sum(num, ...values) {
  console.log(values)
  console.log(num + values [0])

  return num + values[0]
}

sum(1, 1, 2, 3);
