<?php

    function send_email(){

        $user_subject = htmlentities($_POST['subject']);
        $user_message = htmlentities($_POST['message']);
        $user_email = htmlentities($_POST['email']);

        //If there's no message or email address, show error
        if(empty($_POST['email']) || empty($_POST['message']) ){
            header('Location: http://emmajaeblue.com/#/error');
            exit();
        }

        //If email address is invalid

        if (filter_var($user_email, FILTER_VALIDATE_EMAIL) === false) {
			header('Location: http://emmajaeblue.com/#/email-error');
            exit();
        }

        $to = 'emma@emmajaeblue.com';
        //use html entities to protect from SQL injection
        $subject= 'Subject: '.$user_subject;
        $message='Message Body: '.$user_message;
        //From your own domain ensures spam bots don't affect your SEO
        $headers='From: noreply@emmajaeblue.com'.'\r\n';
        //Reply to ensures you respond directly to user
        $headers .='Reply-To'.$user_email;

        //mail($to, $subject, $message);

        if(mail($to, $subject, $message, $headers) && filter_var($user_email, FILTER_VALIDATE_EMAIL)){
            header('Location: http://emmajaeblue.com/#/success');
            exit();
        }

       // echo($user_subject);

    }

    send_email();
    header("Access-Control-Allow-Origin: *");
    header('Content-Type:application/json;charset=UTF-8');

?>