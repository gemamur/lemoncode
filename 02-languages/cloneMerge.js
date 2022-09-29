//clone: función que a partir de un objeto de entrada (source) devuelve un nuevo objeto con las propiedades de (source)

function clone(source) {
    b = {...source};
    return b;
  }

  var a = { name: "a" };
  console.log(clone(a));
  


  //función dado dos objetos de entrada (source y target) devuelve un nuevo objeto con todas las propiedades de target y source prevaleciendo las de source en caso 
  //de propiedades con el mismo nombre

  function merge(source, target) {
    return merged = {...target, ...source};
  }
  
  var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
  var b = { name: "Luisa", age: 31, married: true };
  
  console.log(merge(a, b));