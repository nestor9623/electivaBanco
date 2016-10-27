<?php

/**
 * Repositorio con funciones genericas
 * @author Johnny Alexander Salazar
 * @version 0.1
 */
class Repository {

    private $con;
    private $objCon;

    function Repository() {
        require '../Infraestructura/Connection.php';
        $this->objCon = new Connection();
        $this->con = $this->objCon->connect();
    }

    /**
     * Ejecuta una consulta sql enfocada a seleccionar datos y retorna al 
     * cliente su resultado
     * @return string Echo de resultado de la consulta en formato JSON
     * @param string $query Consulta a ejecutar     
     * @author Johnny Alexander Salazar
     * @version 0.2
     */
    public function Execute($query) {
        try {
            //echo $query;
            /* Le asigno la consulta SQL a la conexion de la base de datos */
            $resultado = $this->objCon->getConnect()->prepare($query);
            /* Executo la consulta */
            $resultado->execute();
            /* Si obtuvo resultados, entonces paselos a un vector */
            if ($resultado->rowCount() > 0) {
                $vec = $resultado->fetchAll(PDO::FETCH_ASSOC);
            }

            if (isset($vec)) {
                echo(json_encode($vec));
            } else {
                echo ' {
                "res" : "Error"
            }';
            }
        } catch (PDOException $exception) {
            /* Se captura el error de ejecucion SQL */
            echo ' {
                "res" : "' . $exception . '"
            }';
        }
    }

    /**
     * Ejecuta una consulta sql enfocada a escritura (save, delete, update)
     *
     * @return string Echo de resultado de la consulta en formato JSON
     * @param string $query Consulta a ejecutar     
     * @author Johnny Alexander Salazar
     * @version 0.2
     */
    public function ExecuteTransaction($query) {
        try {
            /* Le asigno la consulta SQL a la conexion de la base de datos */
            $resultado = $this->objCon->getConnect()->prepare($query);
            /* Executo la consulta */
            $resultado->execute();
            /* Si obtuvo resultados, entonces paselos a un vector */
            if ($resultado->rowCount() > 0) {
                $vec = $resultado->fetchAll(PDO::FETCH_NUM);
            }
            if ($vec[0] > 0) {
                echo(json_encode(['status' => 'true', "msg" => "Operacion exitosa"]));
            } else {
                echo(json_encode(['status' => 'false', "msg" => "Error en la operacion"]));
            }
        } catch (PDOException $exception) {
            echo(json_encode(['status' => 'false', "msg" => "Error inesperado"]));
        }
    }

   

}
