<?php

/**
 * Definicion de acciones para la gestion de los roles
 * @author Johnny Alexander Salazar
 * @version 0.1
 */
class ClienteDAO {

    private $repository;

    function ClienteDAO() {
        require_once '../Infraestructura/Repository.php';
        $this->repository = new Repository();
    }

    public function guardar(ClienteCtl $obj) {
        
        

        $query = "insert into cliente(codigo,nombre,apellido,cedula,edad)"
                  . " values(".$obj->getCodigo() . ",'" .
                               $obj->getNombre() . "','" .
                               $obj->getApellido(). "'," . 
                               $obj->getCedula() . "," .
                               $obj->getEdad().")";

        $this->repository->ExecuteTransaction($query);
    }

    

    /**
     * Ejecuta un buscar en la base de datos
     * @param RolDTO $obj 
     * @return void      
     * @author Johnny Alexander Salazar
     * @version 0.1
     */
    public function buscar(Rol $obj) {
        $query = "select codigo,nombre,apellido,cedula,edad "
                . "from cliente where codigo = '" . $obj->getCodigo() . "'";
        $this->repository->Execute($query);
    }

}
