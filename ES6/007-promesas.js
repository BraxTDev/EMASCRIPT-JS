// una promesa, algo que va a pasar

const anotherFunction = () => {
  return new Promise ((resolve, reject) => {
    if (false) {
      resolve( 'Hey!!')
    } else {
      reject( 'No funciono!!')
    }
  })
}

anotherFunction()
  .then(Response => console.log(Response))
  .catch(err => console.log(err));