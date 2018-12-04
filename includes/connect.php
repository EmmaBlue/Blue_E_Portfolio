<?php 
 $db_dsn = array(
    'host' => 'localhost',
    'dbname' => 'db_portfolio',
    'charset' => 'utf8',

);

$dsn = 'mysql:' .http_build_query($db_dsn, '', ';');

//This is the DB credentials

$db_user = 'root';
$db_pass = 'root'; 
// Makes sure the statement and the values aren't parsed by PHP before sending it to server 
// Helps prevent SQL injecton 
$options = [
    PDO::ATTR_EMULATE_PREPARES   => false, // turn off emulation mode for "real" prepared statements
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, //turn on errors in the form of exceptions
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, //make the default fetch be an associative array
  ];


try{
    $pdo = new PDO($dsn, $db_user, $db_pass, $options);
}   catch(PDOException $exception) {

    echo 'Connection Error ' . $exception->getMessage(); 
    exit();
}


?>