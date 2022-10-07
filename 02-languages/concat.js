//concat utilizando rest/spread
const concat = (a, b) => {

    return [...a, ...b];

}; // Implementation here.

console.log(concat([1,2,3], [4,5,6]));

//versión del anterior donde se aceptan múltiples arrays de entrada

const concatmultiple = (...args) => {
    
    return args.reduce((a, b) => concat(a, b), []);
}
console.log(concatmultiple([1,2,3,4], [5,6,7], [8,9], [10]));