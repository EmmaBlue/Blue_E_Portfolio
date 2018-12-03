<?php 

include 'functions.php';

//Telling browser that file tag is json, otherwise header is plain text
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json;charset=UTF-8');

$data = getData($pdo);
echo json_encode($data);

?>