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
    $query = 'SELECT 
    * FROM 
    (tbl_section_images l LEFT JOIN tbl_section s ON l.section_ID = s.section_ID LEFT JOIN tbl_images i ON i.images_ID = l.images_ID) LEFT JOIN tbl_videos v ON v.video_ID = l.video_ID';
    $get_all = $pdo->query($query);

    //Parsing data from associative array 
    while($row = $get_all->fetch(PDO::FETCH_ASSOC)) {

        $arr[] = $row;
    }

   return $arr;
   if(!$arr) exit('No rows');
   $query = null;
}

?>