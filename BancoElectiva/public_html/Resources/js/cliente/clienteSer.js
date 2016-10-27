"use strict";
app.service('clienteService', function ($http, $httpParamSerializerJQLike) {
    /*Se define una funcion interna llamada rol, que recibe 2 parametros*/
    this.guardar = function (obj) {
        /*El resultado del $http es almacenado en la promesa*/
        /*Ademas se debe definir el tipo de cabecera para enviar los datos*/
        
        
        var promise = $http({
            method: "post",
            url: "PDO/Controlador/CtlCliente.php",
            data: $httpParamSerializerJQLike({
                codigo: obj.codigo,
                nombre: obj.nombre,
                apellido: obj.apellido,
                cedula: obj.cedula,
                edad: obj.edad}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            console.log(response.data);
            /*Todos los datos se almacenan en .data*/
            return response.data;
            alert("Entro al servicio de registrar")
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });

        /*Luego se retorna la promesa*/
        return promise;
    };



    this.buscar = function (obj) {        
        var promise = $http({
            method: "get",
            url: "PDO/Controlador/CtlCliente.php",
            params: {codigo: obj.codigo
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {            
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });

        /*Luego se retorna la promesa*/
        return promise;
    };
});