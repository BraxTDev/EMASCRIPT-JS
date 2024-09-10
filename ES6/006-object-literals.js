// pbject literal, hacer una funcion y retornar objectos

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId
  }
}
console.log(newUser( 'gndx', 43,  'MX', 1));