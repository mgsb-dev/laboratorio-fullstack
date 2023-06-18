<?php
ini_set('log_errors', 1);

$hostname = "localhost";
$username = "root";
$password = "";
$database = "laboratorio_fullstack";

$conn = new mysqli($hostname, $username, $password, $database);
if ($conn->connect_error) {
  echo 'ERROR';
  die("Error de conexión: " . $conn->connect_error);
}

// Consultar la lista de usuarios
$sql = "SELECT * FROM USUARIO";
$result = $conn->query($sql);
?>

