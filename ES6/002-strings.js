let hello = 'Hello'
let world =  'World!'
// unirlos

// let epicPhrase = hello +  ' '+world + '!'
// console.log(epicPhrase)

// template literals

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2)

//multi-line strings
// forma de trabajar con multiples lineas con un string, haciendo saltos
// salto de linea  \n
let lorem  = 'Esto es un string \n'  +  'esto es otra linea';
// opcion de sacarle venteja con template literals
let lorem2 = `Esta es una frase epica
la continunaciion de esa frase epica
`;

console.log(lorem)
console.log(lorem2)