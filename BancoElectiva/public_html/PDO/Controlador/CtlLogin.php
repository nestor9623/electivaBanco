<?php

/* IMPORTS */
require '../Modelo/login.php';
require '../DAO/loginDAO.php';

/* Capturamos el tipo de la peticion: podría ser get, post, put o delete. */
$method = $_SERVER['REQUEST_METHOD'];

$dao = new loginDAO();

// Dependiendo del método de la petición ejecutaremos la acción correspondiente.
switch (strtolower($method)) {
    /* Buscar o Listar */
    case 'get':

        $usuario = (isset($_REQUEST['usuario']) ? $_REQUEST['usuario'] : "");
        $password = (isset($_REQUEST['password']) ? $_REQUEST['password'] : "");

        if ($usuario != "") {
            //Buscar
            $obj = new login($usuario,$password);
            $dao->ingresar($obj);
        } else {
            //Listar
            //RESPUESTA EN FORMATO JSON
        }
        break;

    case 'post':
        /* Guardar */
        /* CONTROL DE ACCIONES */
        $data = $_POST;
        $data = json_decode(json_encode($_POST));
        $obj = new login(null, $data->usuario, $data->password);
        $dao->Save($obj);
        break;

    case 'put':
        /* Modificar */
        //RESPUESTA EN FORMATO JSON
        break;

    case 'delete':

        /* Eliminar */
        //RESPUESTA EN FORMATO JSON
        break;
}
