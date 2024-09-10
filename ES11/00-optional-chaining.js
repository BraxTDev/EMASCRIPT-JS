//optional chaining
//podemos tener un objeto con la representacion llave valor y queremos acceder a una propiedad que no existe
const user = {
  gndx: {
    country: 'MX'
  },
  ana:  {
    country: 'CO'
  }

}

console.log(user?.bebeloper?.country)

