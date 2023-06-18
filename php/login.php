<?php
// error_reporting(E_ALL);
ini_set('log_errors', 1);

if ($_POST) {
  $email = $_POST["email"];
  $contraseña = $_POST["contraseña"];

  // conexión con PDO
  $hostname = "localhost";
  $username = "root";
  $password = "";
  $database = "laboratorio_fullstack";

  // crear conexión
  $conn = new mysqli($hostname, $username, $password, $database);

  // revisar conexión
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = "SELECT * FROM USUARIO WHERE EMAIL = '$email' AND CONTRASEÑA = '$contraseña'";

  if ($conn->query($sql) === TRUE) {
    header("Location: ../vistaPanel.html");
    exit;
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
}
?>

