<?php

if (!empty($_POST) AND (empty($_POST['usuario']) OR empty($_POST['senha']))) 
{
    echo "Existem campos em branco. Verifique e tente novamente!";
}

include("conecta.php");

$consulta = mysqli_query($conexao, $consultabanco);


if (mysqli_num_rows($consulta) != 1)
{
    echo "Login inválido!"; exit;
}
else
{
    $resultado = mysqli_fetch_assoc($consulta);

    if (!isset($_SESSION)) session_start();

    $_SESSION['UsuarioNome'] = $resultado['nome'];
    
    header('Location: ../administrativo/index.html');

}   

?>