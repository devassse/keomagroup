<?php
$to      = 'aquelepapo@psi.org.mz'; //'joaodevsonm@gmail.com';
$subject = 'Enviado do Website';
$name    = $_POST["name"];
$email   = $_POST["email"];
$message = 'Mensagem: '. $_POST["message"] . "\r\n";
$message .= 'Nome: '. $name . "\r\n";
$message .= 'E-mail: '. $email . "\r\n";
$headers = 'From: aquelepopo@psi.co.mz' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
?>