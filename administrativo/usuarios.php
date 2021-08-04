<?php
$conn = new mysqli('127.0.0.1', 'root', '') or die (mysqli_error());
$db = mysqli_select_db($conn, 'seneslife') or dia ("database error");
$query = mysqli_query($conn, "select id, nome from senes_users");
$numrows = mysqli_num_rows($query);


// $conexao = mysqli_connect ('127.0.0.1', 'root', '', 'seneslife', '3306');

// $consultabanco = "select id, nome from senes_users";

// $dados = mysqli_fetch_assoc($consultabanco);

// $total = mysqli_num_rows($consultabanco);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if ($numrows > 0)
        {
            do
            {
    ?>          <p><?=$linha['id']?> - <?=$linha['nome']?></p>
    <?php
            }
            while($linha = mysqli_fetch_assoc($query));
        }
    ?>
</body>
</html>