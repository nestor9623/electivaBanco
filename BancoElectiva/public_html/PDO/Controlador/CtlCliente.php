<?php

/* IMPORTS */
require '../Modelo/ClienteCtl.php';
require '../DAO/ClienteDAO.php';

/* Capturamos el tipo de la peticion: podría ser get, post, put o delete. */
$method = $_SERVER['REQUEST_METHOD'];

$dao = new ClienteDAO();

// Dependiendo del método de la petición ejecutaremos la acción correspondiente.
switch (strtolower($method)) {
    /* Buscar o Listar */
    case 'get':

        $codigo = (isset($_REQUEST['codigo']) ? $_REQUEST['codigo'] : "");

        if ($codigo != "") {
            //Buscar
            $obj = new ClienteCtl($codigo,null,null,null,null);
            $dao->buscar($obj);
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
        
        $obj = new ClienteCtl($data->codigo, $data->nombre, $data->apellido, $data->cedula, $data->edad);
        $dao->guardar($obj);
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
