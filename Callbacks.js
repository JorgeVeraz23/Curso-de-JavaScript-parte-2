/* callback o llamada de vuelta: es una funcion que se va a ejecutar despues de que otra lo haga */

function cuadradoCallback(value, callback){
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | Math.random() * 100
    );
}

cuadradoCallback(0, (value, result) => {
    console.log("Inicia Callback");
    console.log(`Callback ${value}, ${result}`);
})