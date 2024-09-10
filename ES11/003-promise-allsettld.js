// si todo ha sido resuelto, estos metodos que se añaden a la promesa, nos va a dar ventajas

const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise ((resolve, reject) => resolve("resolve"));
const promise3 = new Promise ((resolve, reject) => resolve("resolve2"));

Promise.allSettled([promise1, promise2, promise3])
  .then(response => console.log(response));