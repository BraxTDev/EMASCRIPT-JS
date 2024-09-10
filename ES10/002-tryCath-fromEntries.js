// el manejo de errores con try catch, podemos manejar de forma opcional en el catch

try {
 hello();
} catch {
 console.log('error')
}

try {
  anotherFunction();
} catch {
  console.log('Upsss, debe tener algo mal!')
}

