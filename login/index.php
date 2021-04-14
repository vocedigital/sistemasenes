<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Área de Login</title>
</head>
<body>
    <form action="realizalogin.php" method="post">
        <fieldset>
        <legend>Dados de Login</legend>
            <label for="usuario">Usuário</label>
            <input type="text" name="usuario" id="usuario" maxlength="25" />
            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" />
      
            <input type="submit" value="Entrar" />
        </fieldset>
        </form>
</body>
</html>