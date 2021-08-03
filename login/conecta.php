<?php

$conexao = mysqli_connect ('127.0.0.1', 'root', '', 'seneslife', '3306');

$usuario = mysqli_real_escape_string($conexao, $_POST['usuario']);
$senha = mysqli_real_escape_string($conexao, $_POST['senha']);

$consultabanco = "select id, nome from senes_users where (username = '".$usuario ."') AND (password = '". sha1($senha) ."') LIMIT 1";

?>