<?php

$conexao = mysqli_connect ('127.0.0.1', 'root', '', 'seneslife', '3306');

$usuario = mysqli_real_escape_string($conexao, $_POST['usuario']);
$senha = mysqli_real_escape_string($conexao, $_POST['senha']);

$consultabanco = "select id, nome, nivel from usuarios where (usuario = '".$usuario ."') AND (senha = '". sha1($senha) ."') AND (ativo = 1) LIMIT 1";

?>