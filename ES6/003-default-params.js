function newUser (name, age, country) {
  var name = name ||  'Oscar';
  var age = age ||  34
  var country = country || "mexico"
  console.log(name, age, country)
}
newUser()
newUser( 'David', 15,   'Colombia')

//nueva funcion para este codigo

function newAdmin (name =   'Oscar', age = 32, country =  'CL') {
  console.log(name, age, country)
}

newAdmin();
newAdmin( 'Ana', 29,   'COL')
