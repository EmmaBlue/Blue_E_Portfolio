<?php 

include 'functions.php';

//Telling browser that file tag is json, otherwise header is plain text
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json;charset=UTF-8');

if (isset($_GET['project'])) {

    // pass the connection and the movie id to a function 
    $data = get_single_section($pdo, $_GET['project']);
    echo json_encode($data);

}


else {

    // pass the connection and the movie id to a function 
    $data = get_all($pdo);
    echo json_encode($data);

}


?>