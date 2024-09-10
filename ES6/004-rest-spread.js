// las que van a trabajar con arrays y con objetos

// array destructuring

let fruits = [ 'Apple','Banana']

let [a, b] = fruits
console.log(a, fruits[1])

//con objectos

let user = {username:  'Oscar', age: 34}
let {username, age} = user
console.log(username, user.age)