<?php
$conn = new mysqli('127.0.0.1', 'root', '') or die (mysqli_error());
$db = mysqli_select_db($conn, 'seneslife') or dia ("database error");

$nomeCompleto = mysqli_real_escape_string($conn, $_POST['nome']);
$nomeUsuario = mysqli_real_escape_string($conn, $_POST['usuario']);
$senhaUsuario = mysqli_real_escape_string($conn, $_POST['senha']);

$query = "insert into senes_users (username, password, Nome) values";
$query .= "('$nomeUsuario', '$senhaUsuario', '$nomeCompleto')";

mysqli_query($conn, $query) or die("Erro");

echo "Inserido com sucesso!"

?>