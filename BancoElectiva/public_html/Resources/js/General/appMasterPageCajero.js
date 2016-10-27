/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global app */

"use strict";

var app = angular.module("appMasterPageCajero", ['ngRoute']);


/*Controlador global, que cada vez que se cargue la pagina masterPage 
 * valida si ya inicio sesion para saber si se deja o se redirecciona 
 * al index*/
app.controller('CtlValidateCajero', function ($scope, $window) {
    /*Se almacena en el modelo sesion, este es utilizado por el ng-show 
     * para saber si muestra o no la interfaz grafica*/

    $scope.sesion = sessionStorage.getItem("sesion");

    /*Luego se valida para saber si se redirecciona o no*/
    if (!$scope.sesion) {
        $window.location.href = 'index.html';
    }
});

app.config(function ($routeProvider) {
    $routeProvider
            
            .when('/registros', {
                controller: 'controlInsert',
                templateUrl: 'Vistas/register.html'
            })
            .when('/DELETE', {
                controller: 'controlDelete',
                templateUrl: 'Vistas/register.html'
            }).when('/UPDATE',{
                controller:'controlUpdate',
                templateUrl:'update.html'
            }).when('/perfil',{
                controller:'controlList',
                templateUrl:'Vistas/register.html'
            })  
            .otherwise({
                redirectTo: '/'
            });
});
