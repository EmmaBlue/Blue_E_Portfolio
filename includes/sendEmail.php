<?php

    function fake_mail($to,$subject,$message,$headers) {

        #echo '==== Fake Emails ===='.PHP_EOL;
        #echo 'Email To: '.$to.PHP_EOL;
        #echo 'Subject: '.$subject.PHP_EOL;
        #echo 'Message: '.$message.PHP_EOL;
        #echo '====Emails End ==='.PHP_EOL;
        return true;
    }
    function send_email(){

        $user_subject = htmlentities($_POST['subject']);
        $user_message = htmlentities($_POST['message']);
        $user_email = htmlentities($_POST['email']);

        //If there's email address empty, show error
        if(empty($_POST['email'])){
            header('Location: /Blue_E_Portfolio/#/error');
            exit();
        }

        //If email address doesn't include an @ sign 
        if (strpos($_POST['email'], '@') == false) {
            header('Location: /Blue_E_Portfolio/#/email-error');
            exit();
        }

        if (!isset($_POST['message']) || !isset($_POST['email'])){
            header('Location: /Blue_E_Portfolio/#/error');
            exit();
          }

        $to = 'emmajaeblue@gmail.com';
        //use html entities to protect from SQL injection
        $subject= 'Subject: '.$user_subject;
        $message='Message Body: '.$user_message;
        //From your own domain ensures spam bots don't affect your SEO
        $headers='From: noreply@emmajaeblue.com'.'\r\n';
        //Reply to ensures you respond directly to user
        $headers .='Reply-To'.$user_email;

        //mail($to, $subject, $message);

        /*if(fake_mail($to, $subject, $message, $headers)){
            #var_dump($_POST);
            header('Location: /Blue_E_Portfolio/#/success');
            exit();
        }*/

       // echo($user_subject);

    }

    send_email();

?>