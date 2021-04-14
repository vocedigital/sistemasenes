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

    // Salva os dados encontrados na sessão
    $_SESSION['UsuarioID'] = $resultado['id'];
    $_SESSION['UsuarioNome'] = $resultado['nome'];
    $_SESSION['UsuarioNivel'] = $resultado['nivel'];

 }   

?>
 <p>Olá, <?php echo $_SESSION['UsuarioNome']; ?>!</p>