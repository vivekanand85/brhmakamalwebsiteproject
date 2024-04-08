<?php
//print_r($_POST);exit;	
$name = $_POST['name'];
$email_address = $_POST['email'];
$messagge = $_POST['message'];
$phone = $_POST['phone'];
// $subject = $_POST['subject'];

// Import PHPMailer classes into the global namespace 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
 
require 'phpmailer/Exception.php'; 
require 'phpmailer/PHPMailer.php'; 
require 'phpmailer/SMTP.php'; 
 
$mail = new PHPMailer; 

$mail->isSMTP();
$mail->Host = 'localhost';
$mail->SMTPAuth = false;
$mail->SMTPAutoTLS = false; 
$mail->Port = 25; 
 
// Sender info 
$mail->setFrom("vivek@srishtiindia.com", "Bhramakamal Contact"); 
//$mail->addReplyTo($email, $name); 
 
// Add a recipient 
$mail->addAddress('vivek@srishtiindia.com'); 
 
// Set email format to HTML 
$mail->isHTML(true); 
 
// Mail subject 
$mail->Subject = 'Contact Form - '.$name; 
 
// Mail body content 
$bodyContent = '<h2>Customer Details</h2>'; 
$bodyContent .= '<p>Name: '.$name.'</p>'; 
$bodyContent .= '<p>Email: '.$email_address.'</p>'; 
$bodyContent .= '<p>Phone Number:'.$phone.'</p>';
// $bodyContent .= '<p>Subject: '.$subject.'</p>';  
$bodyContent .= '<p>Message: '.$messagge.'</p>';
$mail->Body    = $bodyContent; 

$mail->send();

if(!$mail->send()) {
   header( "refresh:3; url=Contactus.html" ); 
   echo "<h3>Error. Message not sent.</h3>";   
} else {
  header( "refresh:3; url=Contactus.html" ); 
  echo "<h3>your Message Sent Successfully. Thank you! </h3>";
}
return true;			
?>