//forma de generar diferentes filtros o reglas, para buscar, validar una contraseña cumpla un objetivo o un input tenga un correo valido

const regex = /\b(Apple)+\b/g;

const fruit =   'app, banana, kiwi, orange, etc..etc..etc';

for (const match of  fruit.matchAll(regex)) {
  console.log(match);
}