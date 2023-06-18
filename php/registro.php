<?php
error_reporting(E_ALL);
ini_set('log_errors', 1);

if ($_POST) {
  $nombre = $_POST["nombre"];
  $primerapellido = $_POST["primer-apellido"];
  $segundoapellido = $_POST["segundo-apellido"];
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

  $sql = "INSERT INTO `USUARIO` (`NOMBRE`, `PRIMERAPELLIDO`, `SEGUNDOAPELLIDO`, `EMAIL`, `CONTRASEÑA`) VALUES ('$nombre', '$primerapellido', '$segundoapellido', '$email', '$contraseña')";

  if ($conn->query($sql) === TRUE) {
    echo "<span style='color:#308446;'>¡Datos enviados correctamente!</span>";
    header("Location: ../vistaLogin.html");
    exit;
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
}
?>

