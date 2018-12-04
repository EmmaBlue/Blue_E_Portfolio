<?php

include 'connect.php';

function get_single_section($pdo, $project) {
    $arr = [];
    //Make prepared statement 
    //Modify so actually secure
    //Remove double quotes
    $query = $pdo->prepare("SELECT 
    * FROM 
        tbl_section_images l,
        tbl_section s, 
        tbl_images i
       WHERE l.section_ID = s.section_ID AND i.images_ID = l.images_ID AND ID = '$project'");
    // Execute statement with data so it's combined w/ compiled statement, not insecure SQL string
    $get_section = $query->execute([]);

    //Parsing data from associative array 
    while($row = $query->fetch(PDO::FETCH_ASSOC)) {

        $arr[] = $row;
    }

   return $arr;
   if(!$arr) exit('No rows');
   $query = null;
}


function get_all($pdo) {
    $arr = [];
    //Make prepared statement 
    //Modify so actually secure
    $query = $pdo->prepare('SELECT 
    * FROM 
        tbl_section_images l,
        tbl_section s, 
        tbl_images i
       WHERE l.section_ID = s.section_ID AND i.images_ID = l.images_ID');
    // Execute statement with data so it's combined w/ compiled statement, not insecure SQL string
    $get_all = $query->execute([]);

    //Parsing data from associative array 
    while($row = $query->fetch(PDO::FETCH_ASSOC)) {

        $arr[] = $row;
    }

   return $arr;
   if(!$arr) exit('No rows');
   $query = null;
}

?>