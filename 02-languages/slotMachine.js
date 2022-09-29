// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) 
// tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. 
// El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

// "Congratulations!!!. You won <número de monedas> coins!!";

// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

// "Good luck next time!!".

let cont = 0;
let bool1, bool2, bool3;
class SlothMachine {
  play = () => {
    cont++;
    bool1 = Math.floor(Math.random()*2);
    bool2 = Math.floor(Math.random()*2);
    bool3 = Math.floor(Math.random()*2);
    
    let result = "Good luck next time!!";

    if(bool1 && bool2 && bool3){
        result = "Congratulations!!! You won "+cont+" coins!!!";
        cont = 0;
    }
    // console.log(result); //si quieres que salga la respuesta así al lanzar la llamada masivamente descomenta el console log
    return result;
  }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"

