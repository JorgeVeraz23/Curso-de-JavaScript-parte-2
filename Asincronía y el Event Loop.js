/*
Antes de explicar como funciona el modelo de 
JavaScript es importante entender algunos conceptos

Procesamiento Single thread y Multi threa,
Operaciones de CPU Y y Operaciones de I/O,
Operaciones Concurrentes y Paralelas,
Operaciones Bloqueantes y No Bloqueantes,
Operaciones Sincronas y Asincronas
*/

/* Codigo Sincrono Bloqueante */
(() => {
    console.log("Codigo Sincrono");
    console.log("Inicio");

    function dos(){
        console.log("Dos");
    }

    function uno(){
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})();

/* Codigo Asincrono No Bloqueante */

(() => {
    console.log("Codigo Asincrono");
    console.log("Inicio");

    function dos(){
        setTimeout(function (){
            console.log("Dos");
        }, 1000);
    }

    function uno(){
        setTimeout(function (){
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
    }
    uno();
    console.log("Fin")
})();

