<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of loginDAO
 *
 * @author Mauro
 */
class loginDAO {
    
    private $repository;
    
    function loginDAO(){
        require_once '../Infraestructura/Repository.php';
        $this->repository = new Repository();
    }
     /**
     * Ejecuta un guardar en la base de datos
     * @param RolDTO $obj 
     * @return void      
     * @author Johnny Alexander Salazar
     * @version 0.1
     */
     public function ingresar(login $obj){
        $query="select usuario,password "
                . "from login "
                . "where usuario='".$obj->getUsuario()."'";       
        
        $this->repository->Execute($query);
    }
    
    
    
    public function Save(login $obj) {
        $query = "insert into login (usuario,password) "
                . "values ('" . $obj->getUsuario() . "','" . $obj->getPassword() . "')";
        $this->repository->ExecuteTransaction($query);
    }
}
