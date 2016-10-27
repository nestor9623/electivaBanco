/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global app */
app.controller('CtlLogIn', function ($scope, $window, logInService) {

    /*Se inicializa el modelo*/
    $scope.identificacion = "";
    $scope.buscar = function (form) {
        if ($scope.identificacion.usuario !== "") {
            logInService.buscar($scope.identificacion).then(function (response) {                 
                if (response.length > 0) {                    
                    $scope.identificacion = response[0];
                    sessionStorage.setItem("usersession", response.user);
                    sessionStorage.setItem("sesion", response.status); 
                    if($scope.identificacion.usuario==="AD"){
                    $window,location.href="PaginaPrincipal.html";                    
                    }
                    if($scope.identificacion.usuario==="CL"){
                    $window,location.href="PaginaPrincipalCliente.html";     
                    }
                    if($scope.identificacion.usuario==="CAJ"){
                    $window,location.href="PaginaPrincipalCajero.html";     
                    }
                    
                    //$window,location.href="PaginaPrincipal.html";
                } else {
                    alert("No hay registros en la base de datos");
                }
            });
        } else {
            alert("Verifique los datos ingresados");
        }
    };
    
    
    
    
    $scope.logOut = function () {
        sessionStorage.clear();
        $window.location.href = 'index.html';
    };
});
