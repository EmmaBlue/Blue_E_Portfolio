<?php

include 'connect.php';

function getData($pdo) {
    $arr = [];
    //Make prepared statement 
    $query = $pdo->prepare('SELECT 
    * FROM 
        tbl_section_images l,
        tbl_section s, 
        tbl_images i
       WHERE l.section_ID = s.section_ID AND i.images_ID = l.images_ID AND s.section_name = ?');
    // Execute statement with data so it's combined w/ compiled statement, not insecure SQL string
    $getData = $query->execute(['Pure Volume']);

    //Parsing data from associative array 
    while($row = $query->fetch(PDO::FETCH_ASSOC)) {

        $arr[] = $row;
    }

   return $arr;
   if(!$arr) exit('No rows');
   $query = null;
}

?>