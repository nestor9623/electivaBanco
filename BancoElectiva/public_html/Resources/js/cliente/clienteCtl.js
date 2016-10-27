"use strict";

/*El use strict hace que se deba codificar de manera correcta, siendo estricto
 * a la hora de compilar el codigo ejemplo: 
 * x = 3.14; // This will cause an error (x is not defined)*/


/* global app */

/*Toda funcion de controlador debe tener un $scope, que es la referencia a todos
 * los elementos que pertenecen al constrolador*/
/*app.controller(nombre de la funcion)  ($scope, nombre de los servicios a utilizar)*/
/*$windows servicio por defecto para poder utilizar refresco de pagina y redireccionamiento*/
/*rolService, nombre del servicio que contiene la promesa. */
app.controller('CtlCliente', function ($scope, $window, clienteService) {

    /*Se inicializa el modelo*/
    $scope.obj = "";
    $scope.guardarCliente = function (form) {
        /*Al ser el servicio la llamada por http (funcion asincrona) toca definir
         * promesas con el "then", que se ejecuta unicamente cuando se le retorna
         * un valor valido. Este se ejecuta unicamente cuando el llamado http 
         * consume el REST ("REST" es un paradigma, mientras"RESTful" describe el 
         * uso de ese paradigma*/

        /*Si el formulario esta bien validado*/
        if (form) {
            /*Se ejecuta la funcion mandando por parametro el objeto obj, 
             * el cual esta asociado a los input*/
            clienteService.guardar($scope.obj).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if (response.status) {
                    alert("Operacion");
                    $scope.obj = "";
                } else {
                    alert(response);
                    /*Solo con limpiar el objeto se limpian todos los input 
                     * asociados*/
                }
            });
        } else {
            alert("Verifique los datos ingresados");
        }
        
    };
    $scope.buscar = function (form) {
        if ($scope.obj.codigo !== "") {
            clienteService.buscar($scope.obj).then(function (response) {
                if (response.length > 0) {                    
                    $scope.obj = response[0];
                } else {
                    alert("No hay registros en la base de datos")
                }
            });
        } else {
            alert("Verifique los datos ingresados");
        }
    };



    /*Se define una funcion en el controlador*/
   
});






