<?php 
 $db_dsn = array(
    'host' => '127.0.0.1',
    'dbname' => 'emmaj401_db_portfolio',
    'charset' => 'utf8',

);

$dsn = 'mysql:' .http_build_query($db_dsn, '', ';');

//This is the DB credentials

$db_user = 'emmaj401_EZ5iHo';
$db_pass = 'annavolee7'; 


try{
    $pdo = new PDO($dsn, $db_user, $db_pass);
}   catch(PDOException $exception) {

    echo 'Connection Error ' . $exception->getMessage(); 
    exit();
}


?>