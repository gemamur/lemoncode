// el primero (destructuring)
const head = (arr) => {
    const first = arr[0];
    return first;
}; // Implementation here.


// todos menos el primero (rest)

const tail = (arr) => {
    const [first, ...arr2] = arr;
    return arr2;
}

//todos menos el último (Array.prototype)
const init = (arr) => {
    const [...arr2] = arr;
    arr2.pop();
    return arr2;
}; // Implementation here.

//el último
const last = (arr) => {
    const [...arr2] = arr;
    const lastElement = arr2.pop();
    return lastElement;
}; // Implementation here.