//

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate([ 'Oscar',  'David',  'Ana',  'Ulises',  'jeniffer'])
console.log(it.next().value) 
console.log(it.next().value) 
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)