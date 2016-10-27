/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global app */



app.service('logInService', function ($http, $httpParamSerializerJQLike) {
    this.logIn = function (identificacion) {

        var promise = $http({
            method: "get",
            url: "PDO/Controlador/CtlLogin.php",
            data: $httpParamSerializerJQLike({
                usuario: identificacion.usuario,
                password: identificacion.password
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });
        return promise;
    };
    
    this.buscar = function (identificacion) {        
        var promise = $http({
            method: "get",
            url: "PDO/Controlador/CtlLogin.php",
            params: {usuario: identificacion.usuario
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


