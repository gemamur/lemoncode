// el primero (destructuring)
const head = (arr) => arr.at(0);// Implementation here.

console.log(head([24,1,2,3,4]));//devuelve 24


// todos menos el primero (rest)

const tail = (arr) => {
    const [first, ...arr2] = arr;
    return arr2;
}
console.log(tail([24,1,2,3,4]));//devuelve [1,2,3,4]


//todos menos el último (Array.prototype)
const init = (arr) => arr.slice(0, arr.length-1);

console.log(init([24,1,2,3,4])); //devuelve [24,1,2,3]


//el último
const last = (arr) =>  arr[arr.length-1]; // Implementation here.

console.log(last([24,1,2,3,4]));//devuelve 4